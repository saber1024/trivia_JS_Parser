const { Tokenizer } = require("./Tokenizer");
class Parser {
  constructor() {
    this._string = "";
    this._token = new Tokenizer();
  }

  parse(string) {
    this._string = string;
    this._token.init(string);
    this._lookahead = this._token.getNextToken();
    return this.Program();
  }

  Program() {
    return {
      type: "program",
      body: this.StatementLiteral(),
    };
  }
  // Literal

  /**
   *
   * @param {*} stopLookahead JSliteral Stop Node
   * @returns StatementLiteral
   */
  StatementLiteral(stopLookahead) {
    const statementList = [this.Statement()];

    while (this._lookahead != null && this._lookahead.type !== stopLookahead) {
      statementList.push(this.Statement());
    }

    return statementList;
  }

  /**
   *
   * @returns Statements
   */
  Statement() {
    switch (this._lookahead.type) {
      case "{":
        return this.BlockStatement();
      case ";":
        return this.EmptyStatement();
      case "let":
        return this.VariableStatement();
      case "var":
        return this.VariableStatementVar();
      case "if":
        return this.IfStatement();
      case "while":
        return this.WhileStatement();
      case "do":
        return this.doWhileStatement();
      case "for":
        return this.ForLoopStatement();
      case "CompareOperator":
        return this.compareStatement();
      case "func":
        return this.functionStatement();
      case "RETURN":
        return this.returnStatement();

      default:
        return this.ExpressionStatement();
    }
  }

  comapreOperator() {
    return this._eat("CompareOperator").value;
  }

  /**
   *
   * @returns If Statement
   */
  IfStatement() {
    this._eat("if");
    this._eat("(");
    const test = this.Expression();
    this._eat(")");
    const trueStatement = this.Statement();
    const alternative =
      this._lookahead !== null && this._lookahead.type === "else"
        ? this._eat("else") && this.Statement()
        : null;
    return {
      type: "IFStatement",
      test,
      trueStatement,
      alternative,
    };
  }

  /**
   *
   * @returns while Statement
   */
  WhileStatement() {
    this._eat("while");
    this._eat("(");
    const test = this.Expression();
    this._eat(")");
    const body = this.Statement();
    return {
      type: "WhileStatement",
      test,
      body,
    };
  }
  // do-while Statement
  doWhileStatement() {
    this._eat("do");
    const body = this.Statement();
    this._eat("while");
    this._eat("(");
    const test = this.Expression();
    this._eat(")");
    this._eat(";");
    return {
      type: "DoWhileStatement",
      body,
      test,
    };
  }
  // For Loop
  ForLoopStatement() {
    this._eat("for");
    this._eat("(");
    const init = this._lookahead.type !== ";" ? this.forStatementInit() : null;
    this._eat(";");
    const test = this._lookahead.type !== ";" ? this.Expression() : null;
    this._eat(";");
    const op = this._lookahead.type !== ")" ? this.Expression() : null;
    this._eat(")");
    const body = this.Statement();
    return {
      type: "ForLoopStatement",
      init,
      test,
      op,
      body,
    };
  }

  /**
   *
   * @returns Function Statement
   */
  functionStatement() {
    this._eat("func");
    const functionName = this._Identifire();
    this._eat("(");
    const paramter =
      this._lookahead.type !== ")" ? this._formatParameterList() : [];
    this._eat(")");
    const body = this.BlockStatement();
    return {
      type: "FunctionDeclearation",
      functionName,
      paramter,
      body,
    };
  }
  /**
   *
   * @returns Return Statement
   */
  returnStatement() {
    this._eat("RETURN");
    const expression = this._lookahead.type !== ";" ? this.Expression() : null;
    this._eat(";");
    return {
      type: "ReturnStatement",
      expression,
    };
  }

  //Variable Statement (var)
  VariableStatementVar() {
    this._eat("var");
    const declearations = this._VariableDeclearationList();
    this._eat(";");
    return {
      type: "VariableDeclearation",
      declearations,
    };
  }

  /**
   *
   * @returns variableStatement
   */
  VariableStatement() {
    const VariableStatement = this._VariableDeclearationInit();
    this._eat(";");
    return VariableStatement;
  }

  // Empty Statement
  EmptyStatement() {
    this._eat(";");
    return {
      type: "EmptyStatement",
    };
  }
  /**
   *
   * @returns Block Statement
   */
  BlockStatement() {
    this._eat("{");
    const body = this._lookahead.type !== "}" ? this.StatementLiteral("}") : [];
    this._eat("}");
    return {
      type: "BlockStatement",
      body,
    };
  }

  /**
   *
   * @returns Expression Statement
   */
  ExpressionStatement() {
    const expression = this.Expression();
    this._eat(";");
    return {
      type: "ExpressionStatement",
      expression,
    };
  }

  // Expressions
  Expression() {
    return this.AssigMentExpression();
  }

  /**
   *
   * @returns Addtive Expression
   */
  AddtiveExpression() {
    return this._BinaryExpression("AddtiveOperator", "MultiplyExpression");
  }

  MultiplyExpression() {
    return this._BinaryExpression("Multiplier", "UnaryExpression");
  }

  RelationExpression() {
    return this._BinaryExpression("Relation_Operator", "AddtiveExpression");
  }

  EqualityExpression() {
    return this._BinaryExpression("EQUALITY_OPERATOR", "RelationExpression");
  }

  LogicalAndExpression() {
    return this._LogicalExpression("LOGIC_AND_OPERATOR", "EqualityExpression");
  }

  LogicalOrExpression() {
    return this._LogicalExpression("LOGIC_OR_OPERATOR", "LogicalAndExpression");
  }

  /**
   *
   * @returns AssigMentExpression
   */
  AssigMentExpression() {
    let left = this.LogicalOrExpression();

    if (!this._isAssignmentOperator(this._lookahead.type)) {
      return left;
    }
    return {
      type: "AssignmentExpression",
      operator: this._AssignmentOperator(),
      left: this._checkVaildIdentifire(left),
      right: this.AssigMentExpression(),
    };
  }

  //Identifire
  leftHandIdentifire() {
    return this._Identifire();
  }

  _Identifire() {
    const name = this._eat("IDENTIFIRE").value;
    return {
      type: "IDENTIFIRE",
      name,
    };
  }

  leftHandSideExprssion() {
    return this.CallMemebrExpression();
  }

  CallMemebrExpression() {
    const member = this.MemberExpression();

    if (this._lookahead.type == "(") {
      return this._CallExpression(member);
    }

    return member;
  }

  MemberExpression() {
    let object = this.PrimaryLiteral();
    while (this._lookahead.type === "." || this._lookahead.type === "[") {
      if (this._lookahead.type == ".") {
        this._eat(".");
        const property = this._Identifire();
        object = {
          type: "MemberExpression",
          object,
          property,
        };
      } else {
        this._eat("[");
        const property = this.Expression();
        this._eat("]");
        object = {
          type: "MemberExpression",
          object,
          property,
        };
      }
    }
    return object;
  }

  UnaryExpression() {
    let operator;

    switch (this._lookahead.type) {
      case "AddtiveOperator":
        operator = this._eat("AddtiveOperator").value;
        break;
      case "LOGIC_NOT":
        operator = this._eat("LOGIC_NOT").value;
        break;
    }
    if (operator != null) {
      return {
        type: "UnaryExpression",
        operator,
        arguments: this.UnaryExpression(),
      };
    }
    return this.leftHandSideExprssion();
  }

  // Literals

  Literal() {
    switch (this._lookahead.type) {
      case "NUMBER":
        return this.NumericalLiteral();
      case "STRING":
        return this.StringLiteral();
      case "true":
        return this.BooleanLitreal(true);
      case "false":
        return this.BooleanLitreal(false);
      case "null":
        return this.NullLitreal();
    }

    throw SyntaxError("Unsupport Type");
  }

  PrimaryLiteral() {
    if (this._isLiteral(this._lookahead.type)) {
      return this.Literal();
    }

    switch (this._lookahead.type) {
      case "(":
        return this.ParenthesesLiteral();
      case "IDENTIFIRE":
        return this._Identifire();
      default:
        return this.leftHandSideExprssion();
    }
  }

  ParenthesesLiteral() {
    this._eat("(");
    const expression = this.Expression();
    this._eat(")");
    return expression;
  }

  BooleanLitreal(value) {
    this._eat(value ? "true" : "false");
    return {
      type: "BooleanLitreal",
      value,
    };
  }

  NullLitreal() {
    this._eat("null");
    return {
      type: "NullLitreal",
      value: null,
    };
  }

  StringLiteral() {
    const token = this._eat("STRING");
    return {
      type: "StringLiteral",
      value: token.value.slice(1, -1),
    };
  }

  NumericalLiteral() {
    const token = this._eat("NUMBER");

    return {
      type: "NumericalLiteral",
      value: Number(token.value),
    };
  }

  //Primary Tool func
  _eat(tokenType) {
    const token = this._lookahead;

    if (token === null) {
      throw new SyntaxError(`Unexpect end input, expected ${tokenType}`);
    }

    if (token.type != tokenType) {
      throw new SyntaxError(
        `Unexpected Token ${token.type}, expected ${tokenType}`
      );
    }

    this._lookahead = this._token.getNextToken();

    return token;
  }

  _formatParameterList() {
    var paramterList = [];
    do {
      paramterList.push(this._Identifire());
    } while (this._lookahead.type === "," && this._eat(","));
    return paramterList;
  }

  _VariableDeclearationList() {
    const declearations = [];

    do {
      declearations.push(this._VariableDeclearation());
    } while (this._lookahead.type === "," && this._eat(","));

    return declearations;
  }

  _VariableDeclearation() {
    const id = this._Identifire();
    const init =
      this._lookahead.type !== ";" && this._lookahead.type !== ","
        ? this._VariableInitionalizer()
        : null;
    return {
      type: "VariableDeclearation",
      id,
      init,
    };
  }

  _VariableInitionalizer() {
    this._eat("SIMPLE_ASSIGN");
    return this.AssigMentExpression();
  }

  _BinaryExpression(op, buildName) {
    let left = this[buildName]();
    while (this._lookahead.type === op) {
      const operator = this._eat(op).value;
      const right = this[buildName]();

      left = {
        type: "BinaryExpression",
        operator,
        left,
        right,
      };
    }
    return left;
  }

  _checkVaildIdentifire(node) {
    if (node.type == "IDENTIFIRE" || node.type == "MemberExpression") {
      return node;
    }
    throw SyntaxError("INVAILD IDENTIFIRE");
  }

  _isAssignmentOperator(tokenType) {
    return tokenType === "SIMPLE_ASSIGN" || tokenType === "COMPLEX_ASSIGN";
  }
  _AssignmentOperator() {
    if (this._lookahead.type === "SIMPLE_ASSIGN") {
      return this._eat("SIMPLE_ASSIGN").value;
    }
    return this._eat("COMPLEX_ASSIGN").value;
  }

  _isLiteral(tokenType) {
    return (
      tokenType === "NUMBER" ||
      tokenType === "STRING" ||
      tokenType == "true" ||
      tokenType == "false" ||
      tokenType == "null"
    );
  }

  /**
   *
   * @returns VariableDeclearation
   */
  _VariableDeclearationInit() {
    this._eat("let");
    const declearations = this._VariableDeclearationList();
    // this._eat(";");
    return {
      type: "VariableDeclearation",
      declearations,
    };
  }

  _forStatementInit() {
    if (this._lookahead.type === "let") {
      return this._VariableDeclearationInit();
    }
    return this.Expression();
  }

  _LogicalExpression(op, buildName) {
    let left = this[buildName]();
    while (this._lookahead.type === op) {
      const operator = this._eat(op).value;
      const right = this[buildName]();

      left = {
        type: "LogicExpression",
        operator,
        left,
        right,
      };
    }
    return left;
  }

  _CallExpression(callee) {
    let calleExpression = {
      type: "CallExpression",
      callee,
      arguments: this._Arguments(),
    };
    return calleExpression;
  }

  _Arguments() {
    this._eat("(");
    const argumentList =
      this._lookahead.type !== ")" ? this._ArgumentList() : [];
    this._eat(")");

    return argumentList;
  }

  _ArgumentList() {
    const argumentList = [];

    do {
      argumentList.push(this.AssigMentExpression());
    } while (this._lookahead.type === "," && this._eat(","));
    return argumentList;
  }
}

module.exports = {
  Parser,
};

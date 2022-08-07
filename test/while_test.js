module.exports = (test) => {
  test(
    `while(x > 10){
        x += 10;
    }`,
    {
      type: "program",
      body: [
        {
          type: "WhileStatement",
          test: {
            type: "BinaryExpression",
            operator: ">",
            left: {
              type: "IDENTIFIRE",
              name: "x",
            },
            right: {
              type: "NumericalLiteral",
              value: 10,
            },
          },
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: { type: "IDENTIFIRE", name: "x" },
                  right: { type: "NumericalLiteral", value: 10 },
                },
              },
            ],
          },
        },
      ],
    }
  );
  test(
    `do{
       x += 10;
    }while(x > 10);`,
    {
      type: "program",
      body: [
        {
          type: "DoWhileStatement",
          test: {
            type: "BinaryExpression",
            operator: ">",
            left: {
              type: "IDENTIFIRE",
              name: "x",
            },
            right: {
              type: "NumericalLiteral",
              value: 10,
            },
          },
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: { type: "IDENTIFIRE", name: "x" },
                  right: { type: "NumericalLiteral", value: 10 },
                },
              },
            ],
          },
        },
      ],
    }
  );
  test(
    `for(let i = 0; i < 10; i += 1){
         x += 1;
    }`,
    {
      type: "program",
      body: [
        {
          type: "ForLoopStatement",
          init: {
            type: "VariableDeclearation",
            declearations: [
              {
                type: "VariableDeclearation",
                id: {
                  type: "IDENTIFIRE",
                  name: "i",
                },
                init: {
                  type: "NumericalLiteral",
                  value: 0,
                },
              },
            ],
          },
          test: {
            type: "BinaryExpression",
            operator: "<",
            left: {
              type: "IDENTIFIRE",
              name: "i",
            },
            right: {
              type: "NumericalLiteral",
              value: 10,
            },
          },
          op: {
            type: "AssignmentExpression",
            operator: "+=",
            left: {
              type: "IDENTIFIRE",
              name: "i",
            },
            right: {
              type: "NumericalLiteral",
              value: 1,
            },
          },
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: {
                    type: "IDENTIFIRE",
                    name: "x",
                  },
                  right: {
                    type: "NumericalLiteral",
                    value: 1,
                  },
                },
              },
            ],
          },
        },
      ],
    }
  );
  test(
    `for(; ;){
           x += 1;
      }`,
    {
      type: "program",
      body: [
        {
          type: "ForLoopStatement",
          init: null,
          test: null,
          op: null,
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: {
                    type: "IDENTIFIRE",
                    name: "x",
                  },
                  right: {
                    type: "NumericalLiteral",
                    value: 1,
                  },
                },
              },
            ],
          },
        },
      ],
    }
  );
};

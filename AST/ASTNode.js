const defaultFactories = {
    Program(body) {
        return {
            type: "program",
            body: body,
        };
    },
    EmptyStatement() {
        return {
            type: "EmptyStatement",
        };
    },
    BlockStatement(body) {
        return {
            type: "BlockStatement",
            body,
        };
    },

    ExpressionStatement(expression) {
        return {
            type: "ExpressionStatement",
            expression
        };
    },
    NumericalLiteral(value) {
        return { type: "NumericalLiteral", value };
    },

    StringLiteral(value) {
        return {
            type: "StringLiteral",
            value,
        };
    },
};

const SExpressionFactories = {
    Program(body) {
        return ["begin", body];
    },
    EmptyStatement() { },
    BlockStatement(body) {
        return ["begin", body];
    },
    ExpressionStatement(expression) {
        return expression;
    },
    StringLiteral(value) {
        return `"${value}"`
    },

    NumericalLiteral(value) {
        return `${value}`
    }
};

const ASTMode = "Default";

const factory = ASTMode === "Default" ? defaultFactories : SExpressionFactories;

module.exports = {
    factory,
};

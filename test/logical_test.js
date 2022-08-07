module.exports = (test) => {
  test(`x > 4 && y < 10;`, {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "LogicExpression",
          operator: "&&",
          left: {
            type: "BinaryExpression",
            operator: ">",
            left: {
              type: "IDENTIFIRE",
              name: "x",
            },
            right: {
              type: "NumericalLiteral",
              value: 4,
            },
          },
          right: {
            type: "BinaryExpression",
            operator: "<",
            left: {
              type: "IDENTIFIRE",
              name: "y",
            },
            right: {
              type: "NumericalLiteral",
              value: 10,
            },
          },
        },
      },
    ],
  });
  test(`x > 4 || y < 10;`, {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "LogicExpression",
          operator: "||",
          left: {
            type: "BinaryExpression",
            operator: ">",
            left: {
              type: "IDENTIFIRE",
              name: "x",
            },
            right: {
              type: "NumericalLiteral",
              value: 4,
            },
          },
          right: {
            type: "BinaryExpression",
            operator: "<",
            left: {
              type: "IDENTIFIRE",
              name: "y",
            },
            right: {
              type: "NumericalLiteral",
              value: 10,
            },
          },
        },
      },
    ],
  });
};

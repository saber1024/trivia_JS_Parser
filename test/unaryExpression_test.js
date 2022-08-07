module.exports = (test) => {
  test("!x;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "UnaryExpression",
          operator: "!",
          arguments: {
            type: "IDENTIFIRE",
            name: "x",
          },
        },
      },
    ],
  });
  test("-x;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "UnaryExpression",
          operator: "-",
          arguments: {
            type: "IDENTIFIRE",
            name: "x",
          },
        },
      },
    ],
  });
  test("---x;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "UnaryExpression",
          operator: "-",
          arguments: {
            type: "UnaryExpression",
            operator: "-",
            arguments: {
              type: "UnaryExpression",
              operator: "-",
              arguments: {
                type: "IDENTIFIRE",
                name: "x",
              },
            },
          },
        },
      },
    ],
  });
};

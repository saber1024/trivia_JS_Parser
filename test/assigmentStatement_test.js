module.exports = (test) => {
  test("x = 42;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "AssignmentExpression",
          operator: "=",
          left: {
            type: "IDENTIFIRE",
            name: "x",
          },
          right: {
            type: "NumericalLiteral",
            value: 42,
          },
        },
      },
    ],
  });
};

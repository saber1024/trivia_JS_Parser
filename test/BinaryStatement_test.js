module.exports = (test) => {
  test("3 + 2 + 2;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "+",
          left: {
            type: "BinaryExpression",
            operator: "+",
            left: { type: "NumericalLiteral", value: 3 },
            right: { type: "NumericalLiteral", value: 2 },
          },
          right: { type: "NumericalLiteral", value: 2 },
        },
      },
    ],
  });

  // 3 + 2 - 2 = [-, [+ , 3 , 2], 2]
  test("3 + 2 - 2;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "-",
          left: {
            type: "BinaryExpression",
            operator: "+",
            left: { type: "NumericalLiteral", value: 3 },
            right: { type: "NumericalLiteral", value: 2 },
          },
          right: { type: "NumericalLiteral", value: 2 },
        },
      },
    ],
  });

  //3 + 2 * 2 = [+,[* 2, 2], 3]
  test("3 + 2 * 2;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "+",
          left: {
            type: "NumericalLiteral",
            value: 3,
          },
          right: {
            type: "BinaryExpression",
            operator: "*",
            left: { type: "NumericalLiteral", value: 2 },
            right: { type: "NumericalLiteral", value: 2 },
          },
        },
      },
    ],
  });

  test("(3 + 2) / 2;", {
    type: "program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "/",
          left: {
            type: "BinaryExpression",
            operator: "+",
            left: { type: "NumericalLiteral", value: 3 },
            right: { type: "NumericalLiteral", value: 2 },
          },
          right: { type: "NumericalLiteral", value: 2 },
        },
      },
    ],
  });
};

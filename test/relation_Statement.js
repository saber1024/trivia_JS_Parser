module.exports = (test) => {
  test(
    `
    let x = 5;
    if(x > 10)
        x = 0;
    else
        x += 2;
    
  `,
    {
      type: "program",
      body: [
        {
          type: "VariableDeclearation",
          declearations: [
            {
              type: "VariableDeclearation",
              id: {
                type: "IDENTIFIRE",
                name: "x",
              },
              init: {
                type: "NumericalLiteral",
                value: 5,
              },
            },
          ],
        },
        {
          type: "IFStatement",
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
          trueStatement: {
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
                value: 0,
              },
            },
          },
          alternative: {
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
                value: 2,
              },
            },
          },
        },
      ],
    }
  );
};

module.exports = (test) => {
  test(
    `
       
       if(x){
         x = 0;
       }else{
         x += 1;
       }
    `,
    {
      type: "program",
      body: [
        {
          type: "IFStatement",
          test: { type: "IDENTIFIRE", name: "x" },
          trueStatement: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "=",
                  left: { type: "IDENTIFIRE", name: "x" },
                  right: { type: "NumericalLiteral", value: 0 },
                },
              },
            ],
          },
          alternative: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: { type: "IDENTIFIRE", name: "x" },
                  right: { type: "NumericalLiteral", value: 1 },
                },
              },
            ],
          },
        },
      ],
    }
  );
};

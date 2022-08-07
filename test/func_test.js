module.exports = (test) => {
  test(
    `
        func test(x){
            return x += 10;
        }
    `,
    {
      type: "program",
      body: [
        {
          type: "FunctionDeclearation",
          head: {
            functionName: {
              type: "IDENTIFIRE",
              name: "test",
            },
            paramter: [
              {
                type: "ExpressionStatement",
                expression: { type: "IDENTIFIRE", name: "x" },
              },
            ],
          },
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ReturnStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: {
                    type: "IDENTIFIRE",
                    name: "x",
                  },
                  right: {
                    type: "NumericalLiteral",
                    value: 10,
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
    `
        func test(){
            return x += 10;
        }
    `,
    {
      type: "program",
      body: [
        {
          type: "FunctionDeclearation",
          head: {
            functionName: {
              type: "IDENTIFIRE",
              name: "test",
            },
            paramter: [],
          },
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ReturnStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: {
                    type: "IDENTIFIRE",
                    name: "x",
                  },
                  right: {
                    type: "NumericalLiteral",
                    value: 10,
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
    `
        func test(x,y){
            return x += 10;
        }
    `,
    {
      type: "program",
      body: [
        {
          type: "FunctionDeclearation",
          head: {
            functionName: {
              type: "IDENTIFIRE",
              name: "test",
            },
            paramter: [
              {
                type: "ExpressionStatement",
                expression: { type: "IDENTIFIRE", name: "x" },
              },
              {
                type: "ExpressionStatement",
                expression: { type: "IDENTIFIRE", name: "y" },
              },
            ],
          },
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ReturnStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: {
                    type: "IDENTIFIRE",
                    name: "x",
                  },
                  right: {
                    type: "NumericalLiteral",
                    value: 10,
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

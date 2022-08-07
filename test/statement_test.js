module.exports = (test) => {
    test(
        `
       /**
        *  this is a test
        * */
       42;

       //STRING 
       "hello";
    `,
        {
            type: "program",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: { type: "NumericalLiteral", value: 42 },
                },
                {
                    type: "ExpressionStatement",
                    expression: { type: "StringLiteral", value: "hello" },
                },
            ],
        }
    );
};

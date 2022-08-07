module.exports = (test) => {
    test(
        `
      {
        42;

        "hello";
      }
    `,
        {
            type: "program",
            body: [
                {
                    type: "BlockStatement",
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
                },
            ],
        }
    );
    test(`{

    }`, {
        type: 'program',
        body: [
            {
                type: "BlockStatement",
                body: []
            }
        ]
    })
    test(
        `{
            42;

            {
                "hello";
            }
        }`,
        {
            type: "program",
            body: [
                {
                    type: "BlockStatement",
                    body: [
                        {
                            type: "ExpressionStatement",
                            expression: { type: "NumericalLiteral", value: 42 },
                        },
                        {
                            type: "BlockStatement",
                            body: [
                                {
                                    type: "ExpressionStatement",
                                    expression: { type: "StringLiteral", value: "hello" },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );
};

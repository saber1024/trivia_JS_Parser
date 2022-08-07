module.exports = test => {
    test(
        `42;`, {
        type: 'program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: { type: 'NumericalLiteral', value: 42 }
            }
        ]
    });

    test(
        `"111111111111111";`, {
        "type": "program",
        "body": [
            {
                type: "ExpressionStatement",
                expression: {
                    "type": "StringLiteral",
                    "value": "111111111111111"
                }
            }
        ]
    });

    test(
        `   111;  `, {
        "type": "program",
        "body": [
            {
                type: "ExpressionStatement",
                expression: {
                    "type": "NumericalLiteral",
                    "value": 111
                }
            }
        ]
    });
}
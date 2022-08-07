module.exports = (test) => {
  test("let y = 0;", {
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
              value: 0,
            },
          },
        ],
      },
    ],
  });
  test("let y;", {
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
            init: null,
          },
        ],
      },
    ],
  });

  test("let x, y;", {
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
            init: null,
          },
          {
            type: "VariableDeclearation",
            id: {
              type: "IDENTIFIRE",
              name: "y",
            },
            init: null,
          },
        ],
      },
    ],
  });

  test("let x, y = 42;", {
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
            init: null,
          },
          {
            type: "VariableDeclearation",
            id: {
              type: "IDENTIFIRE",
              name: "y",
            },
            init: 42,
          },
        ],
      },
    ],
  });
};

module.exports = (test) => {
  test(
    `   class Foo extends bar{
      
      var name;
      var age;

      func constructor(name, age){
        this.name = name;
        this.age = age;
      }
    
      func foo(){
         
      }
      
      func bar(){

      }
   }

   class Bar extends Foo{
       func constructor(name, age){
          super(name, age);
       }

      func foo(){
          return this.name + this.age;   
      }
   }

   let a = new Foo("jennie" , 24);
   let b = new Bar("jisoo", 25);

   b.foo();`,
    {
      type: "program",
      body: [
        {
          type: "ClassExpression",
          name: {
            type: "IDENTIFIRE",
            name: "Foo",
          },
          superClass: "bar",
          classVariants: [
            {
              type: "VariableDeclearation",
              declearations: [
                {
                  type: "VariableDeclearation",
                  id: {
                    type: "IDENTIFIRE",
                    name: "name",
                  },
                  init: null,
                },
              ],
            },
            {
              type: "VariableDeclearation",
              declearations: [
                {
                  type: "VariableDeclearation",
                  id: {
                    type: "IDENTIFIRE",
                    name: "age",
                  },
                  init: null,
                },
              ],
            },
          ],
          classFunctions: [
            {
              type: "FunctionDeclearation",
              functionName: {
                type: "IDENTIFIRE",
                name: "constructor",
              },
              paramter: [
                {
                  type: "IDENTIFIRE",
                  name: "name",
                },
                {
                  type: "IDENTIFIRE",
                  name: "age",
                },
              ],
              body: {
                type: "BlockStatement",
                body: [
                  {
                    type: "ExpressionStatement",
                    expression: {
                      type: "AssignmentExpression",
                      operator: "=",
                      left: {
                        type: "MemberExpression",
                        object: {
                          type: "thisExpression",
                        },
                        property: {
                          type: "IDENTIFIRE",
                          name: "name",
                        },
                      },
                      right: {
                        type: "IDENTIFIRE",
                        name: "name",
                      },
                    },
                  },
                  {
                    type: "ExpressionStatement",
                    expression: {
                      type: "AssignmentExpression",
                      operator: "=",
                      left: {
                        type: "MemberExpression",
                        object: {
                          type: "thisExpression",
                        },
                        property: {
                          type: "IDENTIFIRE",
                          name: "age",
                        },
                      },
                      right: {
                        type: "IDENTIFIRE",
                        name: "age",
                      },
                    },
                  },
                ],
              },
            },
            {
              type: "FunctionDeclearation",
              functionName: {
                type: "IDENTIFIRE",
                name: "foo",
              },
              paramter: [],
              body: {
                type: "BlockStatement",
                body: [],
              },
            },
            {
              type: "FunctionDeclearation",
              functionName: {
                type: "IDENTIFIRE",
                name: "bar",
              },
              paramter: [],
              body: {
                type: "BlockStatement",
                body: [],
              },
            },
          ],
        },
        {
          type: "ClassExpression",
          name: {
            type: "IDENTIFIRE",
            name: "Bar",
          },
          superClass: "Foo",
          classVariants: [],
          classFunctions: [
            {
              type: "FunctionDeclearation",
              functionName: {
                type: "IDENTIFIRE",
                name: "constructor",
              },
              paramter: [
                {
                  type: "IDENTIFIRE",
                  name: "name",
                },
                {
                  type: "IDENTIFIRE",
                  name: "age",
                },
              ],
              body: {
                type: "BlockStatement",
                body: [
                  {
                    type: "ExpressionStatement",
                    expression: {
                      type: "CallExpression",
                      callee: {
                        type: "Super",
                      },
                      arguments: [
                        {
                          type: "IDENTIFIRE",
                          name: "name",
                        },
                        {
                          type: "IDENTIFIRE",
                          name: "age",
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              type: "FunctionDeclearation",
              functionName: {
                type: "IDENTIFIRE",
                name: "foo",
              },
              paramter: [],
              body: {
                type: "BlockStatement",
                body: [
                  {
                    type: "ReturnStatement",
                    expression: {
                      type: "BinaryExpression",
                      operator: "+",
                      left: {
                        type: "MemberExpression",
                        object: {
                          type: "thisExpression",
                        },
                        property: {
                          type: "IDENTIFIRE",
                          name: "name",
                        },
                      },
                      right: {
                        type: "MemberExpression",
                        object: {
                          type: "thisExpression",
                        },
                        property: {
                          type: "IDENTIFIRE",
                          name: "age",
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          type: "VariableDeclearation",
          declearations: [
            {
              type: "VariableDeclearation",
              id: {
                type: "IDENTIFIRE",
                name: "a",
              },
              init: {
                type: "NewExpression",
                callee: {
                  type: "IDENTIFIRE",
                  name: "Foo",
                },
                arguments: [
                  {
                    type: "StringLiteral",
                    value: "jennie",
                  },
                  {
                    type: "NumericalLiteral",
                    value: 24,
                  },
                ],
              },
            },
          ],
        },
        {
          type: "VariableDeclearation",
          declearations: [
            {
              type: "VariableDeclearation",
              id: {
                type: "IDENTIFIRE",
                name: "b",
              },
              init: {
                type: "NewExpression",
                callee: {
                  type: "IDENTIFIRE",
                  name: "Bar",
                },
                arguments: [
                  {
                    type: "StringLiteral",
                    value: "jisoo",
                  },
                  {
                    type: "NumericalLiteral",
                    value: 25,
                  },
                ],
              },
            },
          ],
        },
        {
          type: "ExpressionStatement",
          expression: {
            type: "CallExpression",
            callee: {
              type: "MemberExpression",
              object: {
                type: "IDENTIFIRE",
                name: "b",
              },
              property: {
                type: "IDENTIFIRE",
                name: "foo",
              },
            },
            arguments: [],
          },
        },
      ],
    }
  );
};

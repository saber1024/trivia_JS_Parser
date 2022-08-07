const tests = [
  require("./test/literal_test.js"),
  require("./test/statement_test.js"),
  require("./test/blockStatement_test.js"),
  require("./test/emptyStatement_test.js"),
  require("./test/BinaryStatement_test.js"),
  require("./test/assigmentStatement_test.js"),
  require("./test/ifStatement_test.js"),
  require("./test/relation_Statement.js"),
  require("./test/logical_test.js"),
  require("./test/unaryExpression_test.js"),
  require("./test/while_test.js"),
  require("./test/classExpression_test.js"),
];
const { Parser } = require("./src/Parser.js");
const assert = require("assert");

const parser = new Parser();

function exec() {
  function _test(program, expeted) {
    const ast = parser.parse(program);
    assert.deepEqual(ast, expeted);
  }

  tests.forEach((testRun) => testRun(_test));

  console.log("passed!!!");
}

exec();

// manualTest();
function manualTest() {
  const statement = `
   class Foo extends bar{
      
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

   b.foo();
`;

  const obj = parser.parse(statement);
  const jsonObj = JSON.stringify(obj, null, 2);
  console.log(jsonObj);
}

// VAR, AND BASIC SCOPES

/*
* In looking at the differences between var, let and scope, like in any story,
* it's helpful to start at the beginning. In Javascript, we have two
* scopes - global scope and function scope. With var, that means that a
* variable will be scoped to a function if declared inside it. Otherwise, any
* variables declared outside a function have global scope. Here's an  example:
 */

var globalVar = 'I am a global var.';

function willHaveFunctionScope() {
  var functionVar = 'I have function scope';

  return functionVar;
}

// Can access this outside the function since it has global scope
console.log(globalVar);

// This returns functionVar and we can see it outside globally with the function call.
console.log(willHaveFunctionScope());

// However....
// Ooooooops, functionVar is scoped to the function, so we can't see it globally. This generates a reference error.
// console.log(functionVar);

// HOISTING

/*
* This brings us to hoisting. Hoisting means that in effect, the JS compiler
* will assign variable declarations as undefined during the first pass that
* the compiler makes when interpreting code. This has been described as
* variables and function declarations getting put to the top of their
* respective scope, or hoisted to * the top of the code. If you try to log
* these vars, declared after the call, * you will see them output as
* undefined, since they have not been assigned yet * which happens in the
* second pass the compiler makes.
 */

console.log('aVar:', aVar);
console.log('name:', name);
console.log('func', func());

var aVar = 'I am a var';
var name = 'Randy';

function func() {
  return name;
}

console.log('aVar:', aVar);
console.log('name:', name);
console.log('func', func());

/*
 * So here we see that the logs on top generate an undefined value, and the
 * func log just generates the function. Underneath, the calls generate the
 * actual values. This is why it is recommended that vars and function be
 * declared on top of the code page. So, hositing is nothing more than an
 * undefined value being assigned to a variable during the first phase of
 * compilation. Nothing is actually moved around, but it appears that way
 * since vars declared after the intial logs are accessible.
*/

// LET

/*
 * The difference between let and var is that let is blocked scoped, whereas
 * var is function scoped. When we say block scoped it incldes any blocks
 * inside the block where the variable is declared, but not above it. Also,
 * if you try to refenece a variable before its declaration it will result in a
 * reference error. The variable is still "hoisted" however.
 */

{
  let firstName = 'Randy';
  {
    let lastName = 'Ferrer';
    // OK
    console.log(`${firstName} ${lastName}`);
  }

  // OK
  console.log(`${firstName}`);

  // Not OK. lastName is scoped to it's own block and can't be accessed in an
  // outer block.
  // console.log(`${firstName} ${lastName}`);
}

/*
* Finally const behaves like var, except that you cannot reassign a value to
* it...and this is where it gets tricky. In reality, const does not behave like
* constants, but rather it really means one time assignment. If you are
* dealing with a primitive value, you can't reassign that value, so you get a
* true constant. However, if * it's an object, the object itself which is
* referenced in memory can be * changed, but you can't reassign the reference
* to the object.
 */

const myName = 'Randy Ferrer';

// This generateds an error.
// const myName = 'Jack';

const myNameAgain = {
  firstName: 'Randy',
  lastName: 'Ferrer'
};

console.log(myNameAgain);

// I can change the object property as the object is not immutable
myNameAgain.firstName = 'Jack';

console.log(myNameAgain);

// Can't reassign the reference...
// const myNameAgain = {};

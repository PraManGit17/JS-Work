

//  Scope - where one can specific variable or a function in a code

function outer() {
  let a = 10;

  function inner() {
    console.log(a); // inner can access 'a' from outer's lexical environment
  }

  return inner;
}

const fn = outer();
fn(); // Logs: 10

// What's happening here?

// When outer() is called, a Lexical Environment is created with a = 10.

// inner() has access to a because it was defined in the lexical scope of outer.

// This is how closures work — they "close over" their outer lexical environments.

// 🧭 Scope Chain:
// When a variable is accessed, the JS engine:

// Looks in the current Lexical Environment.

// If not found, moves to the outer one.

// Repeats until it reaches the global environment.
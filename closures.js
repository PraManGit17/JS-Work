// Closure - a function defined inside another function, 
// allowing the inner function to access the variables and scope of the outer function

function Counter() {
  let count = 0;

  function inc() {
    count++;
    console.log(count);
  }

  return inc; // return the inner function directly
}

const counter = Counter(); // counter is now the inc function

counter(); // prints: 1
counter(); // prints: 2
counter(); // prints: 3

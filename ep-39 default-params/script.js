function multiply(a, b = 1) {
    return a * b;
  }
  
  function rollDie(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
  }
  console.log(multiply(3, 4)); 
console.log(rollDie())
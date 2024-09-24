const add1 = () => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  };
  
  const add3 = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  };
  
  console.log(add1(1, 2, 3)); // Output: 6
  console.log(add3(4, 5, 6)); // Output: 15
function divideNumbers() {
    try {
      let result = divide(10, 0); 
      document.getElementById("output").innerText = "Result: " + result;
    } catch (error) {
      document.getElementById("output").innerText = "Error: " + error.message;
    }
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
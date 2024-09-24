const evenNumbers = [0, 2, 10, 4, 61, 8];

// Using `some()` to find the first odd number (if any):
const resultSome = evenNumbers.some(num => num % 2 === 1);

// Using `every()` to check if all numbers are even:
const resultEvery = evenNumbers.every(num => num % 2 === 0);

console.log("resultSome:", resultSome); // Output: false
console.log("resultEvery:", resultEvery); // Output: false
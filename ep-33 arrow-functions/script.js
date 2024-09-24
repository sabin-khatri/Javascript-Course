const numbers = [1, 2, 3, 4, 5];

// Map
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); 

// Filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// Reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); 
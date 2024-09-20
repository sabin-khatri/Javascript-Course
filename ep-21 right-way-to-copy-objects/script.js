const originalObject = { name: "Bob", age: 25, hobbies: ["coding", "gaming"] };
const copiedObject = Object.assign({}, originalObject);

console.log(copiedObject);
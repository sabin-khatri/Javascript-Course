
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }

  const person1 = new Person("Sabin", 20);
  const person2 = new Person("Santosh", 27);
  function displayGreetings() {
    const output = document.getElementById("output");
    output.innerHTML = `${person1.sayHello()}<br>${person2.sayHello()}`;
  }
  
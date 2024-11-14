
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `नमस्ते, मेरो नाम ${this.name} हो र म ${this.age} वर्षको छु।`;
    }
  }
  
  
  const person1 = new Person("सुरज", 23);
  const person2 = new Person("अलिसा", 30);
  
  
  function showGreeting() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `${person1.greet()}<br>${person2.greet()}`;
  }
  
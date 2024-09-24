for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  const person = {
    name: "Sabin",
    age: 20,
    city: "Kathmandu"
  };
  
  for (let property in person) {
    console.log(property + ": " + person[property]);
  }
  
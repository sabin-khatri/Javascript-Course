
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    start() {
        console.log(`${this.name} ${this.model} has started!`);
    }
}

function createCar() {
    const myCar = new Car("Toyota", "Corolla");
    myCar.start(); 
}

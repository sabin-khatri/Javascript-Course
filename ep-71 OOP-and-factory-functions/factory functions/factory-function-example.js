
function createCar(name, model) {
    return {
        name,
        model,
        start() {
            console.log(`${this.name} ${this.model} has started!`);
        }
    };
}

function createAndStartCar() {
    const myCar = createCar("Honda", "Civic");
    myCar.start(); 
}

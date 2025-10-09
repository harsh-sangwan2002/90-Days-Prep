class Car {

    static noOfWheels = 4;
    #privateField;

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.#privateField = 'This is a private field';
    }

    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

class SuperCar extends Car {

    constructor(brand, model, year, topSpeed) {
        super(brand, model, year);
        this.topSpeed = topSpeed;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Top Speed: ${this.topSpeed} km/h`);
    }
}

const Toyota = new Car('Toyota', 'Corolla', 2020);
Toyota.displayInfo(); // Output: Car: Toyota Corolla, Year: 2020

const Ferrari = new SuperCar('Ferrari', '488 GTB', 2021, 330);
Ferrari.displayInfo();
// Output: 
// Car: Ferrari 488 GTB, Year: 2021
// Top Speed: 330 km/h
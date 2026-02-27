// Normal function
function TestCar(model, price, color, tax) {

    var obj = {};

    obj.model = model;
    obj.color = color;
    obj.price = price;
    obj.tax = tax;

    obj.finalPrice = function () {
        return this.price + this.tax;
    }

    return obj;
}

const BMW = TestCar("BMW", 30000, "Black", 2000);
// console.log(BMW.finalPrice()); // Outputs: 32000
// console.log(BMW instanceof TestCar); // Outputs: false

// Constructor function to create Car objects
function Car(model, price, color, tax) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.tax = tax;

    // created inside the object
    this.finalPrice = function () {
        return this.price + this.tax;
    }
}

// Created inside the prototype
Car.prototype.displayInfo = function () {
    console.log(`Car Model: ${this.model}, Color: ${this.color}, Price: ${this.price}, Tax: ${this.tax}`);
}

function SuperCar(model, price, color, tax, topSpeed) {
    Car.call(this, model, price, color, tax); // Inherit properties from Car
    this.topSpeed = topSpeed;

    this.finalPrice = function () {
        return this.price + this.tax + 5000; // Additional cost for super cars
    }
}

// Inherit methods from Car
SuperCar.prototype.__proto__ = Car.prototype;

SuperCar.prototype.displayInfo = function () {
    Car.prototype.displayInfo.call(this); // Call the parent method
    console.log(`Top Speed: ${this.topSpeed} km/h`);
}

const Audi = new SuperCar("Audi R8", 150000, "White", 10000, 330);
console.log(Audi);
console.log(Audi.finalPrice());
Audi.displayInfo();

const Toyota = new Car("Toyota", 20000, "Red", 1500);
// console.log(Toyota);
// console.log(Toyota.finalPrice()); // Outputs: 21500
// console.log(Toyota instanceof Car); // Outputs: true
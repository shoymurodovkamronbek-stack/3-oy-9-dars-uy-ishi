class Vehicle {
  constructor(brand, model, pricePerDay) {
    this.brand = brand;
    this.model = model;
    this.pricePerDay = pricePerDay;
  }

  calculatePrice(days) {
    return this.pricePerDay * days;
  }

  rent(days) {
    return `${this.brand} ${this.model}: ${this.calculatePrice(days)} so'm`;
  }
}

class Car extends Vehicle {}
class Motorcycle extends Vehicle {
  calculatePrice(days) {
    return super.calculatePrice(days) * 0.9;
  }
}

class Truck extends Vehicle {
  calculatePrice(days) {
    return super.calculatePrice(days) * 1.2; 
  }
}
const myCar = new Car("Chevrolet", "Malibu", 300000);
const myMoto = new Motorcycle("Yamaha", "R3", 150000);
const myTruck = new Truck("MAN", "TGX", 500000);

console.log(myCar.rent(3));  
console.log(myMoto.rent(3));  
console.log(myTruck.rent(3));
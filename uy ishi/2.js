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
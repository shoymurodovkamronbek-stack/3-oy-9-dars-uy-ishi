class Product {
  #stock;

  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.#stock = stock;
  }

  get stock() {
    return this.#stock;
  }

  set stock(val) {
    if (val < 0) throw new Error("Ombor manfiy bo'lmaydi!");
    this.#stock = val;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    if (quantity > product.stock) throw new Error("Omborda yetarli emas!");
    this.items.push({ product, quantity });
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotalPrice() {
    let total = 0;
    for (let item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.cart = new Cart();
  }

  addToCart(product, quantity) {
    this.cart.addItem(product, quantity);
  }
}

class Order {
  constructor(cart) {
    if (cart.items.length === 0) throw new Error("Savat bo'sh!");
    
    for (let item of cart.items) {
      item.product.stock -= item.quantity;
    }
    
    this.totalAmount = cart.getTotalPrice();
    this.status = "pending";
  }
}
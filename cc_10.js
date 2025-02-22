// task 1 creating a product class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock; 
    }
    getDetails() {
        return `product: ${this.name}, ID: ${this.id}, price: $${this.price}, stock: ${this.stock}`;
    }
    updateStock(quantity) {
        if (this.stock - quantity >= 0) {
            this.stock -= quantity; 
        } // ensures that stock does not go below zero
    }
 }
 const prod1 = new Product("laptop", 101, 1200, 10);
 console.log(prod1.getDetails()); // "product: laptop, ID: 101, price: $1200, stock: 10"
 prod1.updateStock(3);
 console.log(prod1.getDetails()); // "product: laptop, ID: 101, price: $1200, stock: 7"

 // task 2 creating an order class
 class Order {
    constructor (orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(quantity);
    }
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity
        return `order ID: ${this.orderId}, product: ${this.product.name}, quantity: ${this.quantity} total price: $${totalPrice}`;
    }
 }
 const order1 = new Order(501, prod1, 2);
 console.log(order1.getOrderDetails()); // expected output: "order ID: 501, product laptop, quantity: 2, total price: $2400"
 console.log(prod1.getDetails()); // expected output: "product: laptop, order ID: 101, price: $1200, stock: 8" (reduced stock)
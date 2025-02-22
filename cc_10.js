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
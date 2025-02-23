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
        } else {
            console.error(`error: not enough stock for ${this.name}, ID: ${this.id}, price: $${this.price}, stock: ${this.stock}`);
        } // ensures that stock does not go below zero
    }
 }
 // task 2 creating an order class
 class Order {
    constructor (orderId, product, quantity) {
        this.orderId = orderId;
        this.products = product;
        this.quantity = quantity;
        this.products.updateStock(quantity);
    }
    getOrderDetails() {
        const totalPrice = this.products.price * this.quantity
        return `order ID: ${this.orderId}, product: ${this.products.name}, quantity: ${this.quantity} total price: $${totalPrice}`;
    }
}
 
 // task 3 creating an inventory class
 class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }
    addProduct(product) {
        if (product instanceof Product) {
            this.products.push(product);
        } else {
            console.error("error: invalid product");
        }
    }
    listProducts() {
        if (this.products.length === 0) {
            console.log("no products in inventory");
        } else {
            this.products.forEach(product => console.log(product.getDetails()));
        }
    }
    // task 4 - implementing order managment 
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            let order = new Order(orderId, product, quantity);
            this.orders.push(order); 
            console.log(`order placed: order ID: ${orderId}, product: ${product.name}, quantity: ${quantity}`);
        } else { 
            console.log(`stock unavailable! stock of ${product.name} is currently ${product.stock}`);
        }
    }
    listOrders() {
        if (this.orders.length === 0) {
            console.log("no orders placed yet");
    } else {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
}
    // task 5 - implemeting product restock
    restockProduct(productId, quantity) {
        const product = this.products.find(product => product.id === productId);
        if (product) {
            product.stock += quantity;
            console.log(`restocked: product: ${product.name}, new stock: ${product.stock}`);
        } else {
            console.error(`product with ID ${productId} not found`);

        }
      }
   }
const prod1 = new Product("laptop", 101, 1200, 10);
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());
const order1 = new Order (501, prod1, 2);
console.log(order1.getOrderDetails()); 
console.log(prod1.getDetails());
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());
inventory.restockProduct(101, 5);
console.log(prod1.getDetails());
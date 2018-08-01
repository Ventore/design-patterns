"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PizzaStore {
    constructor(factory) {
        this.factory = factory;
    }
    orderPizza(type) {
        let pizza;
        pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
exports.default = PizzaStore;

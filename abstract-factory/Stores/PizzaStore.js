"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PizzaStore {
    orderPizza(type) {
        let pizza;
        pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
exports.default = PizzaStore;

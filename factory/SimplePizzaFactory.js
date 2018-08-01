"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheesePizza_1 = __importDefault(require("./Pizzas/CheesePizza"));
const PepperoniPizza_1 = __importDefault(require("./Pizzas/PepperoniPizza"));
const ClamPizza_1 = __importDefault(require("./Pizzas/ClamPizza"));
const VeggiePizza_1 = __importDefault(require("./Pizzas/VeggiePizza"));
const Pizza_1 = __importDefault(require("./Pizzas/Pizza"));
class SimplePizzaFactory {
    createPizza(type) {
        switch (type) {
            case 'cheese':
                return new CheesePizza_1.default();
            case 'pepperoni':
                return new PepperoniPizza_1.default();
            case 'clam':
                return new ClamPizza_1.default();
            case 'veggie':
                return new VeggiePizza_1.default();
            default:
                return new Pizza_1.default();
        }
    }
}
exports.default = SimplePizzaFactory;

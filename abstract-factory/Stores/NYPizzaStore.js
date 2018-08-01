"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaStore_1 = __importDefault(require("./PizzaStore"));
const CheesePizza_1 = __importDefault(require("../Pizzas/NY/CheesePizza"));
class NYPizzaStore extends PizzaStore_1.default {
    createPizza(type) {
        switch (type) {
            case 'cheese':
                return new CheesePizza_1.default();
            default:
                throw new Error('Unknown pizza type');
        }
    }
}
exports.default = NYPizzaStore;

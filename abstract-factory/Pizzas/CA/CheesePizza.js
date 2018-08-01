"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("../Pizza"));
class CaliforniaStyleCheesePizza extends Pizza_1.default {
    constructor() {
        super();
        this.name = 'California Style Deep Dish Cheese Pizza';
        this.dough = 'Extra Thick Crust Dough';
        this.sauce = 'Plum Tomato Sause';
        this.toppings = ['Shredered Mozzarella Cheese'];
    }
    cut() {
        console.log('Cutting the pizza into square slices');
    }
}
exports.default = CaliforniaStyleCheesePizza;

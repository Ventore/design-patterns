"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("../Pizza"));
class NYStyleCheesePizza extends Pizza_1.default {
    constructor() {
        super();
        this.name = 'NY Style Sauce and Cheese Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';
        this.toppings = ['Grated Reggiano Cheese'];
    }
}
exports.default = NYStyleCheesePizza;

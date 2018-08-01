"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NYPizzaStore_1 = __importDefault(require("./Stores/NYPizzaStore"));
const CAPizzaStore_1 = __importDefault(require("./Stores/CAPizzaStore"));
const nyStore = new NYPizzaStore_1.default();
const californiaStore = new CAPizzaStore_1.default();
let pizza = nyStore.orderPizza('cheese');
console.log('Ethan oredered a ' + pizza.name);
pizza = californiaStore.orderPizza('cheese');
console.log('Joel oredered a ' + pizza.name);

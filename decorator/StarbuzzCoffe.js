"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HouseBlend_1 = __importDefault(require("./Beverages/HouseBlend"));
const Espresso_1 = __importDefault(require("./Beverages/Espresso"));
const Mocha_1 = __importDefault(require("./Condiments/Mocha"));
let beverage1 = new HouseBlend_1.default();
beverage1 = new Mocha_1.default(beverage1);
beverage1 = new Mocha_1.default(beverage1);
console.log(`${beverage1.getDescription()} is $${beverage1.cost()}`);
let beverage2 = new Espresso_1.default();
console.log(`${beverage2.getDescription()} is $${beverage2.cost()}`);

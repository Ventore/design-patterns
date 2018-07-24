"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlyWithWings_1 = __importDefault(require("../FlyBehaviors/FlyWithWings"));
const Quack_1 = __importDefault(require("../QuackBehaviors/Quack"));
const Duck_1 = __importDefault(require("./Duck"));
class MallardDuck extends Duck_1.default {
    constructor() {
        super();
        this.quackBehavior = new Quack_1.default();
        this.flyBehavior = new FlyWithWings_1.default();
    }
    display() {
        console.log('I am Mallard duck');
    }
}
exports.default = MallardDuck;

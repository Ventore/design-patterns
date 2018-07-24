"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = __importDefault(require("./Duck"));
const FlyNoWay_1 = __importDefault(require("../FlyBehaviors/FlyNoWay"));
const Quack_1 = __importDefault(require("../QuackBehaviors/Quack"));
class ModelDuck extends Duck_1.default {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay_1.default();
        this.quackBehavior = new Quack_1.default();
    }
    display() {
        console.log('I am a model duck');
    }
}
exports.default = ModelDuck;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Beverage_1 = __importDefault(require("./Beverage"));
class HouseBlend extends Beverage_1.default {
    constructor() {
        super();
        this.description = 'House Blend Coffe';
    }
    cost() {
        return 0.89;
    }
}
exports.default = HouseBlend;

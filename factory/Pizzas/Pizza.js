"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    prepare() {
        console.log('Add topings');
    }
    bake() {
        console.log('Put into oven');
    }
    cut() {
        console.log('Cut into slices');
    }
    box() {
        console.log('Put into box');
    }
}
exports.default = Pizza;

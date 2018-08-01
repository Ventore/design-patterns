"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    prepare() {
        console.log('Preparing ' + this.name);
        console.log('Tossing dough...');
        console.log('Adding sauce...');
        console.log('Adding toppings...');
        this.toppings.forEach((topping, i) => {
            console.log('  ' + topping);
        });
    }
    bake() {
        console.log('Bake for 25 minutes at 350');
    }
    cut() {
        console.log('Cutting pizza into diagonal slices');
    }
    box() {
        console.log('Place pizza in official PizzaStore box');
    }
}
exports.default = Pizza;

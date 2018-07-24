"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    performFly() {
        this.flyBehavior.fly();
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    setFlyBehavior(fb) {
        this.flyBehavior = fb;
    }
    setQuackBehavior(qb) {
        this.quackBehavior = qb;
    }
    swim() {
        console.log('All ducks float, even decoys!');
    }
}
exports.default = Duck;

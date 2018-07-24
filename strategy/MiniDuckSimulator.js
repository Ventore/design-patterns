"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MallardDuck_1 = __importDefault(require("./Ducks/MallardDuck"));
const ModelDuck_1 = __importDefault(require("./Ducks/ModelDuck"));
const FlyRocketPowered_1 = __importDefault(require("./FlyBehaviors/FlyRocketPowered"));
const mallard = new MallardDuck_1.default();
mallard.display();
mallard.performFly();
const model = new ModelDuck_1.default();
model.display();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered_1.default());
model.performFly();

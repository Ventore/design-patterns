import { FlyBehavior, QuackBehavior } from '../interfaces';
import Duck from './Duck';
import FlyNoWay from '../FlyBehaviors/FlyNoWay';
import Quack from '../QuackBehaviors/Quack';
export default class ModelDuck extends Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }
  public display() {
    console.log('I am a model duck');
  }
}

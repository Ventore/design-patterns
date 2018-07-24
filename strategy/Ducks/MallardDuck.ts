import { FlyBehavior, QuackBehavior } from '../interfaces';
import FlyWithWings from '../FlyBehaviors/FlyWithWings';
import Quack from '../QuackBehaviors/Quack';
import Duck from './Duck';

export default class MallardDuck extends Duck {
  quackBehavior: QuackBehavior;
  flyBehavior: FlyBehavior;
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }
  public display() {
    console.log('I am Mallard duck');
  }
}

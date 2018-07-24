import { QuackBehavior } from '../interfaces';

export default class Squeak implements QuackBehavior {
  public quack() {
    console.log('Squeak');
  }
}

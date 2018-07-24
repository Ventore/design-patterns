import { QuackBehavior } from '../interfaces';

export default class Quack implements QuackBehavior {
  public quack() {
    console.log('Quack');
  }
}

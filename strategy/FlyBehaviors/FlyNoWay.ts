import { FlyBehavior } from '../interfaces';

export default class FlyNoWay implements FlyBehavior {
  public fly() {
    console.log("I can't fly");
  }
}

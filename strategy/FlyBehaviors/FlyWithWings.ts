import { FlyBehavior } from '../interfaces';

export default class FlyWithWings implements FlyBehavior {
  public fly() {
    console.log("I'm flying!!");
  }
}

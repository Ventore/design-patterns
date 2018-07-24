import { FlyBehavior } from '../interfaces';

export default class FlyRocketPowered implements FlyBehavior {
  public fly() {
    console.log('I am flying with a rocket');
  }
}

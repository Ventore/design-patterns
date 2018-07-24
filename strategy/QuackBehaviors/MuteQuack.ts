import { QuackBehavior } from '../interfaces';

export default class MuteQuack implements QuackBehavior {
  public quack() {
    console.log('<< Silence >>');
  }
}

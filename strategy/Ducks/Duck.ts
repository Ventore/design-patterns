import { FlyBehavior, QuackBehavior } from '../interfaces';

export default abstract class Duck {
  abstract flyBehavior: FlyBehavior;
  abstract quackBehavior: QuackBehavior;
  public abstract display(): void;
  public performFly(): void {
    this.flyBehavior.fly();
  }
  public performQuack(): void {
    this.quackBehavior.quack();
  }
  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }
  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
  public swim() {
    console.log('All ducks float, even decoys!');
  }
}

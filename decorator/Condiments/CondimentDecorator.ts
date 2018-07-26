import Beverage from '../Beverages/Beverage';

export default abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;
}

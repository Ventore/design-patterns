import CondimentDecorator from './CondimentDecorator';
import Beverage from '../Beverages/Beverage';

export default class Mocha extends CondimentDecorator {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  public getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }
  public cost() {
    return this.beverage.cost() + 0.2;
  }
}

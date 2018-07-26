import Beverage from './Beverage';

export default class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend Coffe';
  }
  public cost() {
    return 0.89;
  }
}

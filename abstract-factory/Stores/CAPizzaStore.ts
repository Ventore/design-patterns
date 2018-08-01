import PizzaStore from './PizzaStore';
import Pizza from '../Pizzas/Pizza';
import CheesePizza from '../Pizzas/CA/CheesePizza';

export default class CAPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      default:
        throw new Error('Unknown Pizza Type');
    }
  }
}

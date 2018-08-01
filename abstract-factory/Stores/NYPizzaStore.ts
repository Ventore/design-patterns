import PizzaStore from './PizzaStore';
import Pizza from '../Pizzas/Pizza';
import NYStyleCheesePizza from '../Pizzas/NY/CheesePizza';

export default class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYStyleCheesePizza();
      default:
        throw new Error('Unknown pizza type');
    }
  }
}

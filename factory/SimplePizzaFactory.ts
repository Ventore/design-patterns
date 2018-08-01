import CheesePizza from './Pizzas/CheesePizza';
import PepperoniPizza from './Pizzas/PepperoniPizza';
import ClamPizza from './Pizzas/ClamPizza';
import VeggiePizza from './Pizzas/VeggiePizza';
import Pizza from './Pizzas/Pizza';

export default class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'pepperoni':
        return new PepperoniPizza();
      case 'clam':
        return new ClamPizza();
      case 'veggie':
        return new VeggiePizza();
      default:
        return new Pizza();
    }
  }
}

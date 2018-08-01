import SimplePizzaFactory from './SimplePizzaFactory';
import Pizza from './Pizzas/Pizza';

export default class PizzaStore {
  factory: SimplePizzaFactory;
  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }
  orderPizza(type: string): Pizza {
    let pizza: Pizza;

    pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

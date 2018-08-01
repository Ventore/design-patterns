import Pizza from '../Pizzas/Pizza';

export default abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    let pizza: Pizza;

    pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
  protected abstract createPizza(type: string): Pizza;
}

import Pizza from './Pizzas/Pizza';
import NYPizzaStore from './Stores/NYPizzaStore';
import CAPizzaStore from './Stores/CAPizzaStore';
import PizzaStore from './Stores/PizzaStore';
const nyStore: PizzaStore = new NYPizzaStore();
const californiaStore: PizzaStore = new CAPizzaStore();

let pizza: Pizza = nyStore.orderPizza('cheese');
console.log('Ethan oredered a ' + pizza.name);
pizza = californiaStore.orderPizza('cheese');
console.log('Joel oredered a ' + pizza.name);

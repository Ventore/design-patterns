import Pizza from '../Pizza';

export default class CaliforniaStyleCheesePizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];
  constructor() {
    super();
    this.name = 'California Style Deep Dish Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sause';
    this.toppings = ['Shredered Mozzarella Cheese'];
  }
  cut() {
    console.log('Cutting the pizza into square slices');
  }
}

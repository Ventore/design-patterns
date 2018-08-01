import Pizza from '../Pizza';

export default class NYStyleCheesePizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];
  constructor() {
    super();
    this.name = 'NY Style Sauce and Cheese Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings = ['Grated Reggiano Cheese'];
  }
}

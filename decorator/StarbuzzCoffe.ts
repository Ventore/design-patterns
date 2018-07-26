import HouseBlend from './Beverages/HouseBlend';
import Espresso from './Beverages/Espresso';
import Mocha from './Condiments/Mocha';

let beverage1 = new HouseBlend();
beverage1 = new Mocha(beverage1);
beverage1 = new Mocha(beverage1);
console.log(`${beverage1.getDescription()} is $${beverage1.cost()}`);

let beverage2 = new Espresso();
console.log(`${beverage2.getDescription()} is $${beverage2.cost()}`);

import MallardDuck from './Ducks/MallardDuck';
import Duck from './Ducks/Duck';
import ModelDuck from './Ducks/ModelDuck';
import FlyRocketPowered from './FlyBehaviors/FlyRocketPowered';

const mallard: Duck = new MallardDuck();
mallard.display();
mallard.performFly();

const model: Duck = new ModelDuck();
model.display();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();

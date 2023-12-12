import MallardDuck from "./ducks/mallard-duck.ts";
import ModelDuck from "./ducks/model-duck.ts";
import { FlyWithRocket } from "./interfaces/fly-behaviors.classes.ts";

// client codes

//* use instance with predefine behaviors
const mallard = new MallardDuck();
mallard.performFly(); //I'm flying with wings!
mallard.performQuack(); //<< quacking >>

//* use instance that have no behaviors
const modelDuck = new ModelDuck();
modelDuck.performFly(); //I can't fly
modelDuck.performQuack(); //I can't quack

//* setting behaviors on run time
modelDuck.setFlyBehavior(new FlyWithRocket());
modelDuck.performFly(); //I can fly with rocket !

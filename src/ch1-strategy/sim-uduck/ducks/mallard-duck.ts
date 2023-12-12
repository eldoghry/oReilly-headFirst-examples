import { FlyWithWings } from "../interfaces/fly-behaviors.classes.ts";
import { Quack } from "../interfaces/quack-behaviors.classes.ts";
import Duck from "./duck.ts";

export default class MallardDuck extends Duck {
  constructor() {
    super();

    // set default behavior
    this.setQuackBehavior(new Quack());
    this.setFlyBehavior(new FlyWithWings());
  }

  display() {
    console.log("I am Mallard Duck");
  }
}

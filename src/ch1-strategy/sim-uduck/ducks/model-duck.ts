import Duck from "./duck.ts";

export default class ModelDuck extends Duck {
  constructor() {
    super();
  }

  /** @override */
  display() {
    console.log("I am Model Duck");
  }
}

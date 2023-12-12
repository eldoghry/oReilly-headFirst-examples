import IFlyBehavior from "../interfaces/iFlyBehavior";
import IQuackBehavior from "../interfaces/iQuackBehavior";

export default abstract class Duck {
  // strategies
  flyBehavior: IFlyBehavior | null = null;
  quackBehavior: IQuackBehavior | null = null;

  constructor() {}

  performFly() {
    if (this?.flyBehavior) this.flyBehavior?.fly();
    else console.log(`I can't fly`);
  }

  performQuack() {
    if (this.quackBehavior) this.quackBehavior.quack();
    else console.log(`I can't quack`);
  }

  // setting strategies at run time
  setFlyBehavior(flyBehavior: IFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: IQuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  // other duck methods
  swim() {
    console.log("All ducks float, even decoys!");
  }

  display() {
    console.log("The duck displays its behavior");
  }
}

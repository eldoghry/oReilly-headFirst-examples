import IFlyBehavior from "./iFlyBehavior.ts";

export class FlyWithWings implements IFlyBehavior {
  fly(): void {
    console.log("I'm flying with wings!");
  }
}

export class FlyNoWay implements IFlyBehavior {
  fly(): void {
    console.log("I can't fly!");
  }
}

export class FlyWithRocket implements IFlyBehavior {
  fly(): void {
    console.log("I can fly with rocket !");
  }
}

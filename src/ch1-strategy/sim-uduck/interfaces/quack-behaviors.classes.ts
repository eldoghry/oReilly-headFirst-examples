import IQuackBehavior from "./iQuackBehavior.ts";

export class Quack implements IQuackBehavior {
  quack(): void {
    console.log("<< quacking >>");
  }
}

export class Squeak implements IQuackBehavior {
  quack(): void {
    console.log("<< squeak >>");
  }
}

export class MuteQuack implements IQuackBehavior {
  quack(): void {
    console.log("<< no sound !! >>");
  }
}

import { ICommand } from "../interfaces/iCommand.ts";
import { CeilingFan } from "../receivers/ceilingFan.ts";

export class CeilingFanOnHigh implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
    this.prevSpeed = this.ceilingFan.getSpeed();
  }

  execute() {
    this.ceilingFan.on();
    this.ceilingFan.high();
    console.log(this.prevSpeed);
  }

  undo(): void {
    if (this.prevSpeed === this.ceilingFan.MEDIUM) this.ceilingFan.medium();
    else if (this.prevSpeed === this.ceilingFan.LOW) this.ceilingFan.low();
    else this.ceilingFan.off();
  }
}

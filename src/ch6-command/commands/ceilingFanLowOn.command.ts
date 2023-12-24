import { ICommand } from "../interfaces/iCommand.ts";
import { CeilingFan } from "../receivers/ceilingFan.ts";

export class CeilingFanOnLow implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
    this.prevSpeed = this.ceilingFan.getSpeed();
  }

  execute() {
    this.ceilingFan.on();
    this.ceilingFan.low();
    console.log(this.prevSpeed);
  }

  undo(): void {
    if (this.prevSpeed === this.ceilingFan.HIGH) this.ceilingFan.high();
    else if (this.prevSpeed === this.ceilingFan.MEDIUM)
      this.ceilingFan.medium();
    else this.ceilingFan.off();
  }
}

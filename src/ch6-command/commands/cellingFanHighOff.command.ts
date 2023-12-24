import { ICommand } from "../interfaces/iCommand.ts";
import { CeilingFan } from "../receivers/ceilingFan.ts";

export class CeilingFanOffHigh implements ICommand {
  ceilingFan: CeilingFan;
  prevSpeed: number;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
    this.prevSpeed = this.ceilingFan.getSpeed();
  }

  execute() {
    this.ceilingFan.off();
  }

  undo(): void {
    this.ceilingFan.on();
    if (this.prevSpeed === this.ceilingFan.HIGH) this.ceilingFan.high();
    else if (this.prevSpeed === this.ceilingFan.MEDIUM)
      this.ceilingFan.medium();
    else if (this.prevSpeed === this.ceilingFan.LOW) this.ceilingFan.low();
  }
}

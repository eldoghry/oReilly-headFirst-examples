import { ICommand } from "../interfaces/iCommand.ts";
import { Light } from "../receivers/light.ts";

export class LightOnCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

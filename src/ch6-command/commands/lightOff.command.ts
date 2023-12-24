import { ICommand } from "../interfaces/iCommand.ts";
import { Light } from "../receivers/light.ts";

export class LightOffCommand implements ICommand {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

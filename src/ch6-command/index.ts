import { Light } from "./receivers/light.ts";
import { LightOffCommand } from "./commands/lightOff.command.ts";
import { LightOnCommand } from "./commands/lightOn.command.ts";
import { RemoteController } from "./invoker/remoteControl.ts";
import { CeilingFan } from "./receivers/ceilingFan.ts";
import { CeilingFanOffHigh } from "./commands/cellingFanHighOff.command.ts";
import { CeilingFanOnHigh } from "./commands/ceilingFanHighOn.command.ts";
import { CeilingFanOnLow } from "./commands/ceilingFanLowOn.command.ts";
import { CeilingFanOffLow } from "./commands/cellingFanLowOff.command.ts";

(() => {
  // define receivers
  const light = new Light();
  const ceilingFan = new CeilingFan();

  // define commands
  const lightOffCommand = new LightOffCommand(light);
  const lightOnCommand = new LightOnCommand(light);

  const ceilingFanOnHigh = new CeilingFanOnHigh(ceilingFan);
  const ceilingFanOffHigh = new CeilingFanOffHigh(ceilingFan);
  const ceilingFanOnLow = new CeilingFanOnLow(ceilingFan);
  const ceilingFanOffLow = new CeilingFanOffLow(ceilingFan);

  // invoker
  const remoteController = new RemoteController();
  remoteController.setCommand(0, lightOnCommand, lightOffCommand);
  remoteController.setCommand(1, ceilingFanOnHigh, ceilingFanOffHigh);
  remoteController.setCommand(2, ceilingFanOnLow, ceilingFanOffLow);
  remoteController.printSettings();

  remoteController.clickOnButtonKey(0);
  remoteController.clickOffButtonKey(0);
  remoteController.undo();
  remoteController.undo();

  remoteController.clickOnButtonKey(1);
  remoteController.clickOnButtonKey(2);
  remoteController.undo();
})();

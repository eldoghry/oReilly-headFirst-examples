import { NoCommand } from "../commands/noCommand.command.ts";
import { ICommand } from "../interfaces/iCommand.ts";

export class RemoteController {
  public onCommands: ICommand[] = [];
  public offCommands: ICommand[] = [];
  public undoCommand: ICommand = new NoCommand();

  constructor() {
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) this.setCommand(i, noCommand, noCommand);
  }

  setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  clickOnButtonKey(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  clickOffButtonKey(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undo() {
    this.undoCommand.undo();
  }

  printSettings() {
    const display = [];
    for (let i = 0; i < this.onCommands.length; i++) {
      display.push({
        ON: `${this.onCommands[i].constructor.name}`,
        OFF: `${this.offCommands[i].constructor.name}`,
      });
    }

    console.table(display);
  }
}

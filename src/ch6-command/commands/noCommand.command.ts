import { ICommand } from "../interfaces/iCommand.ts";

export class NoCommand implements ICommand {
  execute() {
    console.log("No command implemented");
  }

  undo() {
    console.log("No command implemented");
  }
}

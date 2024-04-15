import { AbstractCommand } from './abstract-command.js';

export class ConcreteCommandC extends AbstractCommand {
    execute() {
        console.log(`Executing ${this.constructor.name} and processing without receiver`);
    }
}

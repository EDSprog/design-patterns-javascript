import { AbstractCommand } from './abstract-command.js';

export class ConcreteCommandA extends AbstractCommand {
    constructor(receiverA) {
        super();
        this._receiverA = receiverA;
    }

    execute() {
        console.log(`Executing ${this.constructor.name}`);
        this._receiverA.action1();
    }
}

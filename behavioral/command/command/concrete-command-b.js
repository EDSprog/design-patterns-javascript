import { AbstractCommand } from './abstract-command.js';

export class ConcreteCommandB extends AbstractCommand {
    constructor(receiverA, receiverB, arg1, arg2) {
        super();
        this._receiverA = receiverA;
        this._receiverB = receiverB;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    execute() {
        console.log(`Executing ${this.constructor.name}`);
        this._receiverA.action2(this.arg1);
        this._receiverB.action1(this.arg2);
    }
}

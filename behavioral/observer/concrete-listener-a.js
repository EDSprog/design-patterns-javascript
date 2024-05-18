import { AbstractListener } from './abstract-listener.js';

export class ConcreteListenerA extends AbstractListener {
    constructor() {
        super();
        this.state = 0;
    }

    update(state) {
        this.state = state;
        console.log(`ConcreteListenerA reacts to changed state ${this.state}`);
    }
}

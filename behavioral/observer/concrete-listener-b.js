import { AbstractListener } from './abstract-listener.js';

export class ConcreteListenerB extends AbstractListener {
    constructor() {
        super();
        this.state = 0;
    }

    update(state) {
        this.state = state;
        console.log(`ConcreteListenerB reacts to changed state ${this.state}`);
    }
}

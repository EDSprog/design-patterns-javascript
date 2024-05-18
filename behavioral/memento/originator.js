import { ConcreteMemento } from './concrete-memento.js';

export class Originator {
    constructor(state) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }

    changeRandomState() {
        console.log('Changing state...');
        this.state = Math.random().toString(36).substring(2, 9);
        console.log(`Changed state to ${this.state}`);
    }

    saveSnapshot() {
        return new ConcreteMemento(this.state);
    }

    restore(memento) {
        this.state = memento.getState();
        console.log(`State was restored to: ${this.state}`);
    }
}

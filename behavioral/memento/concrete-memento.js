import { AbstractMemento } from './abstract-memento.js';

export class ConcreteMemento extends AbstractMemento {
    constructor(state) {
        super();
        this.state = state;
    }

    getState() {
        return this.state;
    }

    getName() {
        return `${this.date} / (${this.state.substring(0, 9)}...)`;
    }
}

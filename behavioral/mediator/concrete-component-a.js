import { AbstractComponent } from './abstract-component.js';

export class ConcreteComponentA extends AbstractComponent {
    constructor(mediator) {
        super(mediator);
    }

    click() {
        this.mediator.notify(this, 'ConcreteComponentA clicked.');
    }

    sendText() {
        this.mediator.notify(this, 'ConcreteComponentA sends text.');
    }
}

import { AbstractComponent } from './abstract-component.js';

export class ConcreteComponentB extends AbstractComponent {
    constructor(mediator) {
        super(mediator);
    }

    click() {
        this.mediator.notify(this, 'ConcreteComponentB clicked.');
    }

    sendText() {
        this.mediator.notify(this, 'ConcreteComponentB sends text.');
    }
}

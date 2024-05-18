export class AbstractComponent {
    constructor(mediator) {
        this.mediator = mediator;
    }
    click() {
        this.mediator.notify(this);
    }

    sendText(text) {
        this.mediator.notify(this, text);
    }
}

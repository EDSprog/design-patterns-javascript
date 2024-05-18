import { AbstractMediator } from './abstract-mediator.js';
import { ConcreteComponentA } from './concrete-component-a.js';
import { ConcreteComponentB } from './concrete-component-b.js';

export class ConcreteMediator extends AbstractMediator {
    constructor() {
        super();
        this.componentA = new ConcreteComponentA(this);
        this.componentB = new ConcreteComponentB(this);
    }

    notify(sender, event) {
        // ConcreteMediator knows what to do when a component sends a notification
        // It can also send notifications to other components
        if (event === 'ConcreteComponentA clicked.') {
            console.log('ConcreteMediator reacts to ConcreteComponentA click.');
        }

        if (event === 'ConcreteComponentB clicked.') {
            console.log('ConcreteMediator reacts to ConcreteComponentB click.');
        }

        if (event === 'ConcreteComponentA sends text.') {
            console.log('ConcreteMediator reacts to ConcreteComponentA text.');
        }

        if (event === 'ConcreteComponentB sends text.') {
            console.log('ConcreteMediator reacts to ConcreteComponentB text.');
        }
    }
}

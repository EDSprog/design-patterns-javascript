import { AbstractElement } from './abstract-element.js';

export class ConcreteElementB extends AbstractElement {
    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }

    operationB() {
        console.log('Run operation B in ConcreteElementB');
    }
}

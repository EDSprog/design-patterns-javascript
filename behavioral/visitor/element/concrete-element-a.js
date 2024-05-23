import { AbstractElement } from './abstract-element.js';

export class ConcreteElementA extends AbstractElement {
    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }

    operationA() {
        console.log('Run operation A in ConcreteElementA');
    }
}

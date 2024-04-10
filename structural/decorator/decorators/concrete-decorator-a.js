import { AbstractDecorator } from './abstract-decorator.js';

export class ConcreteDecoratorA extends AbstractDecorator {
    constructor(component) {
        super(component);
    }

    operation() {
        super.operation();
        this._additionalOperation();
    }

    // You can call this method before or after the super.operation() call to change the behavior of the ConcreteComponent
    _additionalOperation() {
        console.log('Execute additional operation from ConcreteDecoratorA');
    }
}

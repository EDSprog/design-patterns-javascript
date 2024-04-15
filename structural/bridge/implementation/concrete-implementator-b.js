import { AbstractImplementor } from './abstract-implementor.js';

export class ConcreteImplementatorB extends AbstractImplementor {
    operationImplementation() {
        console.log('ConcreteImplementatorB operationImplementation working');
    }
}

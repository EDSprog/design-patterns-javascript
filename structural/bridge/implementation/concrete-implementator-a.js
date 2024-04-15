import { AbstractImplementor } from './abstract-implementor.js';

export class ConcreteImplementatorA extends AbstractImplementor {
    operationImplementation() {
        console.log('ConcreteImplementatorA operationImplementation working');
    }
}

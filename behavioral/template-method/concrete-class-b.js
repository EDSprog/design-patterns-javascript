import { AbstractClass } from './abstract-class.js';

export class ConcreteClassB extends AbstractClass {
    primitiveOperation1() {
        console.log('Run primitive operation 1 in ConcreteClassB');
    }

    primitiveOperation2() {
        console.log('Run primitive operation 2 in ConcreteClassB');
    }
}

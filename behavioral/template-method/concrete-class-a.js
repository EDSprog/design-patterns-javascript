import { AbstractClass } from './abstract-class.js';

export class ConcreteClassA extends AbstractClass {
    primitiveOperation1() {
        console.log('Run primitive operation 1 in ConcreteClassA');
    }

    primitiveOperation2() {
        console.log('Run primitive operation 2 in ConcreteClassA');
    }
}

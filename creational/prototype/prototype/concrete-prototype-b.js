import { AbstractPrototype } from './abstract-prototype.js';

export class ConcretePrototypeB extends AbstractPrototype {
    constructor(field1, field2) {
        super(field1, field2);
    }

    doSomething() {
        console.log(`ConcretePrototypeB does something with fields: ${this.field1}, ${this.field2}`);
    }
}

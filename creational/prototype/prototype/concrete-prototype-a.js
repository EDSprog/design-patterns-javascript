import { AbstractPrototype } from './abstract-prototype.js';

export class ConcretePrototypeA extends AbstractPrototype {
    constructor(field1, field2, field3) {
        super(field1, field2);
        this.field3 = field3;
    }

    clone() {
        const clone = Object.create(this);
        clone.field1 = this.field1;
        clone.field2 = this.field2;
        clone.field3 = this.field3;
        return clone;
    }
}

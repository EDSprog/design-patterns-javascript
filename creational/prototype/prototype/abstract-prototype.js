export class AbstractPrototype {
    constructor(field1, field2) {
        this.field1 = field1;
        this.field2 = field2;
    }

    clone() {
        const clone = Object.create(this);
        clone.field1 = this.field1;
        clone.field2 = this.field2;
        return clone;
    }
}

export class AbstractClass {
    templateMethod() {
        this.primitiveOperation1();
        this.primitiveOperation2();
    }

    primitiveOperation1() {
        throw new Error('This method must be overwritten!');
    }

    primitiveOperation2() {
        throw new Error('This method must be overwritten!');
    }
}

export class AbstractProductB {
    constructor() {
        if (this.constructor === AbstractProductB) {
            throw new Error('Abstract class "AbstractProductB" cannot be instantiated directly');
        }
    }

    workWithProduct() {
        throw new Error('You have to implement the workWithProduct method in product B!');
    }
}

export class AbstractProduct {
    constructor() {
        if (this.constructor === AbstractProduct) {
            throw new Error('Abstract class "AbstractProduct" cannot be instantiated directly');
        }
    }

    workWithProduct() {
        throw new Error('You have to implement the workWithProduct method in product!');
    }
}

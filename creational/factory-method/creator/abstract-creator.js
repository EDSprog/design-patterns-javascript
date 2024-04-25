export class AbstractCreator {
    constructor() {
        if (this.constructor === AbstractCreator) {
            throw new Error('Abstract class "AbstractCreator" cannot be instantiated directly');
        }
    }

    _factoryMethod() {
        // You can create some default implementation here
        throw new Error('Method "factoryMethod" must be implemented');
    }

    operation() {
        const product = this._factoryMethod();
        console.log(product.workWithProduct());
    }
}

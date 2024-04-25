export class AbstractFactory {
    constructor() {
        if (this.constructor === AbstractFactory) {
            throw new Error('Abstract class "AbstractFactory" cannot be instantiated directly');
        }
    }

    createProductA() {
        throw new Error('AbstractFactory#createProductA needs to be overridden');
    }

    createProductB() {
        throw new Error('AbstractFactory#createProductB needs to be overridden');
    }
}

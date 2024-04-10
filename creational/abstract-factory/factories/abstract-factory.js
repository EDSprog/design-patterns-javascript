export class AbstractFactory {
    createProductA() {
        throw new Error('AbstractFactory#createProductA needs to be overridden');
    }

    createProductB() {
        throw new Error('AbstractFactory#createProductB needs to be overridden');
    }
}

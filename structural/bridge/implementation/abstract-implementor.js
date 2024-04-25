export class AbstractImplementor {
    constructor() {
        if (this.constructor === AbstractImplementor) {
            throw new Error('Abstract class "AbstractImplementor" cannot be instantiated directly');
        }
    }

    operationImplementation() {
        throw new Error('AbstractImplementor#operationImplementation needs to be overridden');
    }
}

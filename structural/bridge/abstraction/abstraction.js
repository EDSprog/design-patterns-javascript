export class Abstraction {
    constructor(implementor) {
        this._implementor = implementor;
    }

    set implementor(implementor) {
        this._implementor = implementor;
    }

    operation() {
        console.log(`Executing ${this.constructor.name} with ${this._implementor.constructor.name}`)
        return this._implementor.operationImplementation();
    }
}

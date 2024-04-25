export class AbstractProductA {
    constructor() {
        if (this.constructor === AbstractProductA) {
            throw new Error('Abstract class "AbstractProductA" cannot be instantiated directly');
        }
    }

    workWithProduct() {
        throw new Error('You have to implement the workWithProduct method in product A!');
    }
}

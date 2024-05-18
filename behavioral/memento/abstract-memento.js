export class AbstractMemento {
    constructor() {
        this.date = new Date();
    }
    getName() {
        throw new Error('This method must be overwritten!');
    }
    getDate() {
        return this.date;
    }
}

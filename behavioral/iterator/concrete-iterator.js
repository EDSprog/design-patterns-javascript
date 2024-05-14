import { AbstractIterator } from './abstract-iterator.js';

export class ConcreteIterator extends AbstractIterator {
    constructor(collection) {
        super();
        this.collection = collection;
        this.position = 0;
    }

    current() {
        return this.collection[this.position];
    }

    first() {
        return this.collection[0];
    }

    next() {
        this.position += 1;
    }

    isDone() {
        return this.position >= this.collection.length;
    }
}

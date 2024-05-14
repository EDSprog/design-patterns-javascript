import { AbstractCollection } from './abstract-collection.js';
import { ConcreteIterator } from './concrete-iterator.js';

export class ConcreteCollection extends AbstractCollection {
    constructor() {
        super();
        this.items = [];
    }

    getCount() {
        return this.items.length;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    createIterator() {
        return new ConcreteIterator(this.items);
    }
}

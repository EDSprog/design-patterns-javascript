import { ConcreteCollection } from './concrete-collection.js';

const collection = new ConcreteCollection();
collection.addItem('A');
collection.addItem('B');
collection.addItem('C');

const iterator = collection.createIterator();
console.log('Iterating over collection:');
for (iterator.first(); !iterator.isDone(); iterator.next()) {
    collection.deleteItem('C');
    console.log(iterator.current());
}

const iterator2 = collection.createIterator();
console.log('Iterating over updated collection:');
for (iterator2.first(); !iterator2.isDone(); iterator2.next()) {
    console.log(iterator2.current());
}

/**
 * Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
 * Output:
 * Iterating over collection:
 * A
 * B
 * C
 * Iterating over updated collection:
 * A
 * B
 */

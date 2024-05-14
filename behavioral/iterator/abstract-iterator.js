export class AbstractIterator {
    current() {
        throw new Error('You have to implement the method current!');
    }

    first() {
        throw new Error('You have to implement the method first!');
    }

    next() {
        throw new Error('You have to implement the method next!');
    }

    isDone() {
        throw new Error('You have to implement the method isDone!');
    }
}

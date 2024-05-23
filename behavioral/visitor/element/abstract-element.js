export class AbstractElement {
    accept(visitor) {
        throw new Error('You have to implement the method accept!');
    }
}

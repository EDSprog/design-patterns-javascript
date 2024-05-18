export class Caretaker {
    constructor(originator) {
        this.mementos = [];
        this.originator = originator;
    }

    backup() {
        console.log('Caretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.saveSnapshot());

    }

    undo() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        this.originator.restore(memento);
    }
}

export class AbstractMediator {
    notify(sender, event) {
        throw new Error('This method must be overwritten!');
    }
}

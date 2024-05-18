export class Publisher {
    constructor() {
        this.listeners = [];
        this.state = 0;
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    unsubscribe(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    notify() {
        for (const listener of this.listeners) {
            listener.update(this.state);
        }
    }

    changeState(state) {
        this.state = state;
        this.notify();
    }
}

export class Context {
    constructor(state) {
        this.state = state;
        this.state.setContext(this);
    }

    changeState(state) {
        this.state = state;
        this.state.setContext(this);
    }

    operationA() {
        this.state.operationA();
    }

    operationB() {
        this.state.operationB();
    }
}

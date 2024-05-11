export class AbstractHandler {
    constructor() {
        if (this.constructor === AbstractHandler) {
            throw new TypeError('Abstract class "AbstractHandler" cannot be instantiated directly.');
        }
    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
    }
}

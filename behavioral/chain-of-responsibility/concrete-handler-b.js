import { AbstractHandler } from './abstract-handler.js';

export class ConcreteHandlerB extends AbstractHandler {
    handle(request) {
        if (request === 'B') {
            return `ConcreteHandlerB handled request: ${request}`;
        } else {
            return super.handle(request);
        }
    }
}

import { AbstractHandler } from './abstract-handler.js';

export class ConcreteHandlerA extends AbstractHandler {
    handle(request) {
        if (request === 'A') {
            return `ConcreteHandlerA handled request: ${request}`;
        } else {
            return super.handle(request);
        }
    }
}

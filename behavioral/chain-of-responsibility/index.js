import { ConcreteHandlerA } from './concrete-handler-a.js';
import { ConcreteHandlerB } from './concrete-handler-b.js';

const concreteHandlerA = new ConcreteHandlerA();
const concreteHandlerB = new ConcreteHandlerB();

concreteHandlerA.setNext(concreteHandlerB);

const requests = ['A', 'B', 'C'];

for (const request of requests) {
    const result = concreteHandlerA.handle(request);
    if (result) {
        console.log(result);
    } else {
        console.log(`Request ${request} was not handled.`);
    }
}

/**
 * Chain of Responsibility pattern allows an object to pass a request along a chain of handlers.
 * Output:
 * ConcreteHandlerA handled request: A
 * ConcreteHandlerB handled request: B
 * Request C was not handled.
 */

import { Publisher } from './publisher.js';
import { ConcreteListenerA } from './concrete-listener-a.js';
import { ConcreteListenerB } from './concrete-listener-b.js';

const publisher = new Publisher();
const concreteListenerA = new ConcreteListenerA();
const concreteListenerB = new ConcreteListenerB();

publisher.subscribe(concreteListenerA);
publisher.subscribe(concreteListenerB);

publisher.changeState(4);
publisher.changeState(10);
publisher.changeState(15);

/**
 * Observer pattern help to create notification mechanism if some objects depend on state of other objects.
 * Output:
 * ConcreteListenerA reacts to changed state 4
 * ConcreteListenerB reacts to changed state 4
 * ConcreteListenerA reacts to changed state 10
 * ConcreteListenerB reacts to changed state 10
 * ConcreteListenerA reacts to changed state 15
 * ConcreteListenerB reacts to changed state 15
 */

import { Invoker } from './invoker.js';
import { ReceiverA } from './reciever/receiver-a.js';
import { ReceiverB } from './reciever/receiver-b.js';
import { ConcreteCommandA } from './command/concrete-command-a.js';
import { ConcreteCommandB } from './command/concrete-command-b.js';
import { ConcreteCommandC } from './command/concrete-command-c.js';

const invoker1 = new Invoker();
const receiverA = new ReceiverA();
const receiverB = new ReceiverB();

const concreteCommandA = new ConcreteCommandA(receiverA);
const concreteCommandB = new ConcreteCommandB(receiverA, receiverB, 'Argument 1', 'Argument 2'); // two receivers
const concreteCommandC = new ConcreteCommandC(); // no receiver

invoker1.addCommand(concreteCommandA);
invoker1.addCommand(concreteCommandB);
invoker1.addCommand(concreteCommandC);

invoker1.doSomething();

console.log('---');

invoker1.removeCommand(concreteCommandA);
invoker1.doSomething();

/**
 * Output:
 * Invoker is working...
 * Executing ConcreteCommandA
 * ReceiverA action 1 working...
 * Executing ConcreteCommandB
 * ReceiverA action 2 working with Argument 1...
 * ReceiverB action 1 working with Argument 2...
 * Executing ConcreteCommandC and processing without receiver
 * ---
 * Invoker is working...
 * Executing ConcreteCommandB
 * ReceiverA action 2 working with Argument 1...
 * ReceiverB action 1 working with Argument 2...
 * Executing ConcreteCommandC and processing without receiver
 */



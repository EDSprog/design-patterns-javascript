import { ConcreteMediator } from './concrete-mediator.js';

const concreteMediator = new ConcreteMediator();

concreteMediator.componentA.click();
concreteMediator.componentB.click();
concreteMediator.componentA.sendText();
concreteMediator.componentB.sendText();

/**
 * The Mediator pattern helps to reduce the complexity of communication between objects.
 * Objects no longer need to know about each other, they only need to know about the mediator.
 * Output:
 * ConcreteMediator reacts to ConcreteComponentA click.
 * ConcreteMediator reacts to ConcreteComponentB click.
 * ConcreteMediator reacts to ConcreteComponentA text.
 * ConcreteMediator reacts to ConcreteComponentB text.
 */

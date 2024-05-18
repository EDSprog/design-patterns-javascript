import { ConcreteStateA } from './concrete-state-a.js';
import { ConcreteStateB } from './concrete-state-b.js';
import { Context } from './context.js';

const concreteStateA = new ConcreteStateA();
const context = new Context(concreteStateA);
context.operationA();
context.operationB();

context.changeState(new ConcreteStateB());

context.operationA();
context.operationB();

/**
 * The State pattern help us to bring objects behaviour to separate objects that gives more convenient way to maintain
 * and change classes which behaviour depend on its state.
 * Output:
 * Run operation A in ConcreteStateA with context: Context
 * Run operation B in ConcreteStateA with context: Context
 * Run operation A in ConcreteStateB with context: Context
 * Run operation B in ConcreteStateB with context: Context
 */

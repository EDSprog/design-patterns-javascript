import {Abstraction} from './abstraction/abstraction.js';
import {ConcreteImplementatorA} from './implementation/concrete-implementator-a.js';
import {ConcreteImplementatorB} from './implementation/concrete-implementator-b.js';

const implementatorA = new ConcreteImplementatorA();
const abstraction = new Abstraction(implementatorA);
abstraction.operation();
abstraction.implementor = new ConcreteImplementatorB();
abstraction.operation();

/**
 * Output:
 * Executing Abstraction with ConcreteImplementatorA
 * ConcreteImplementatorA operationImplementation working
 * Executing Abstraction with ConcreteImplementatorB
 * ConcreteImplementatorB operationImplementation working
 */

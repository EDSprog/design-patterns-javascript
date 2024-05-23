import { ConcreteVisitor } from './visitor/concrete-visitor.js';
import { ConcreteElementA } from './element/concrete-element-a.js';
import { ConcreteElementB } from './element/concrete-element-b.js';

const visitor = new ConcreteVisitor();
const concreteElementA = new ConcreteElementA();
const concreteElementB = new ConcreteElementB();

concreteElementA.accept(visitor);
concreteElementB.accept(visitor);

/**
 * The Visitor pattern helps us to add new operation without changing classes.
 * Output:
 * Run visitConcreteElementA in ConcreteVisitor
 * Run operation A in ConcreteElementA
 * Run visitConcreteElementA in ConcreteVisitor
 * Run operation B in ConcreteElementB
 */

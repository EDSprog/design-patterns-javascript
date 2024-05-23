import { ConcreteClassB } from './concrete-class-b.js';
import { ConcreteClassA } from './concrete-class-a.js';

const concreteClassA = new ConcreteClassA();
const concreteClassB = new ConcreteClassB();
concreteClassA.templateMethod();
concreteClassB.templateMethod();

/**
 * The Template Method pattern help us to create a template method in AbstractClass
 * that use primitive operations that will be overridden in ConcreteClass.
 * It helps to avoid code duplication and make code more maintainable.
 * Template method is a method that defines the program skeleton of an algorithm.
 *
 * Output:
 * Run primitive operation 1 in ConcreteClassA
 * Run primitive operation 2 in ConcreteClassA
 * Run primitive operation 1 in ConcreteClassB
 * Run primitive operation 2 in ConcreteClassB
 */

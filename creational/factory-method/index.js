import { ConcreteCreatorA } from './creator/concrete-creator-a.js';
import { ConcreteCreatorB } from './creator/concrete-creator-b.js';

const creatorA = new ConcreteCreatorA();
creatorA.operation();

const creatorB = new ConcreteCreatorB();
creatorB.operation();

/**********************************************************************************************************************************************
 * The factory method pattern defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.*
 * Output:                                                                                                                                    *
 * ConcreteProductA is working...                                                                                                             *
 * ConcreteProductB is working...                                                                                                             *
 **********************************************************************************************************************************************/

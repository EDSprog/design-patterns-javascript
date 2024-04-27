import { ConcretePrototypeA } from './prototype/concrete-prototype-a.js';
import { ConcretePrototypeB } from './prototype/concrete-prototype-b.js';

const concretePrototypeA = new ConcretePrototypeA(
    'concretePrototypeAField1',
    'concretePrototypeAField2',
    'concretePrototypeAField3',
);
const cloneA = concretePrototypeA.clone();
const concretePrototypeB = new ConcretePrototypeB('concretePrototypeBField1', 'concretePrototypeBField2');
const cloneB = concretePrototypeB.clone();

console.log('Is cloneA copy of ConcretePrototypeA?', cloneA.field1 === concretePrototypeA.field1);
console.log('Is cloneB copy of ConcretePrototypeB?', cloneB.field2 === concretePrototypeB.field2);
console.log('Is ConcretePrototypeB can doSomething?');
cloneB.doSomething()

import { ConcreteLeaf } from './concrete-leaf.js';
import { ConcreteCompositeA } from './concrete-composite-a.js';
import { ConcreteCompositeB } from './concrete-composite-b.js';

(()=> {
    const leaf1 = new ConcreteLeaf('Leaf1');
    const leaf2 = new ConcreteLeaf('Leaf2');
    const leaf3 = new ConcreteLeaf('Leaf3');
    const containerA = new ConcreteCompositeA('ContainerA');
    const containerB = new ConcreteCompositeB('ContainerB');

    containerA.add(leaf1);
    containerA.add(leaf2);
    containerA.operation();
    containerA.remove(leaf1);
    containerA.operation();

    containerB.add(leaf3);
    containerB.operation();
})()

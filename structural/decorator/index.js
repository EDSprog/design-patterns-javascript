import { ConcreteDecoratorA } from './decorators/concrete-decorator-a.js';
import { ConcreteDecoratorB } from './decorators/concrete-decorator-b.js';
import { ConcreteComponent } from './components/concrete-component.js';

const decoratedComponent = new ConcreteDecoratorA(new ConcreteDecoratorB(new ConcreteComponent()));
decoratedComponent.operation();

/**
 * Output:
 * ConcreteComponent works
 * Execute additional operation from ConcreteDecoratorB
 * Execute additional operation from ConcreteDecoratorA
 */

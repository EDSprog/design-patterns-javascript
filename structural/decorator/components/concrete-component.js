import { AbstractComponent } from './abstract-component.js';

export class ConcreteComponent extends AbstractComponent {
    operation() {
        console.log('ConcreteComponent works');
    }
}

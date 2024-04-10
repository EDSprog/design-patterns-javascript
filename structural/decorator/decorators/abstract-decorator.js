import { AbstractComponent } from '../components/abstract-component.js';

export class AbstractDecorator extends AbstractComponent {
    constructor(component) {
        super();
        this._component = component;
    }

    operation() {
        this._component.operation();
    }
}

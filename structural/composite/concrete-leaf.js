import { Component } from './component.js';

// ConcreteLeaf provide default implementations of the operations.
// This class not implements the add, remove, and getChild methods because it's a leaf.
export class ConcreteLeaf extends Component {
    constructor(name) {
        super(name);
    }

    operation() {
        return `Leaf ${this.name} works.`;
    }
}

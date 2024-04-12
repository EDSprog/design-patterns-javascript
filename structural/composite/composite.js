import { Component } from './component.js';

export class Composite extends Component {
    constructor(name) {
        super(name);
        this._children = [];
    }

    operation() {
        console.log(`Composite ${this.name} works.`);
        const childrenOperationsResults = [];
        for (const child of this._children) {
            childrenOperationsResults.push(child.operation());
        }
        console.log(`Composite children operations results: ${childrenOperationsResults}`);
    }

    add(component) {
        this._children.push(component);
    }

    remove(component) {
        this._children = this._children.filter(child => child !== component);
    }

    getChild(index) {
        return this._children[index];
    }
}

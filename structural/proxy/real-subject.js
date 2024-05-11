import { AbstractSubject } from './abstract-subject.js';

export class RealSubject extends AbstractSubject {
    request() {
        console.log('RealSubject: Handling request.');
    }
}

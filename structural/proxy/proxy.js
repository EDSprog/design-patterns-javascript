import { AbstractSubject } from './abstract-subject.js';

export class Proxy extends AbstractSubject {
    constructor(realSubject) {
        super();
        this.realSubject = realSubject;
    }

    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    checkAccess() {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    logAccess() {
        console.log('Proxy: Logging the time of request.');
    }
}

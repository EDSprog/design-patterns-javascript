import { RealSubject } from './real-subject.js';
import { Proxy } from './proxy.js';

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.request();

/**
 * Output:
 * Proxy: Checking access prior to firing a real request.
 * RealSubject: Handling request.
 * Proxy: Logging the time of request.
 */

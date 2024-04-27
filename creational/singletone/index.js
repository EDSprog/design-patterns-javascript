import { Singleton } from './singleton.js';

const singleton = new Singleton('singleton');
singleton.name = 'singleton1';
const singleton2 = new Singleton('singleton2');

console.log('Singleton name:', singleton.name);
console.log('Is singleton name equal to singleton2 name?', singleton.name === singleton2.name);
console.log('Is singleton completely the same as singleton2?', singleton === singleton2);

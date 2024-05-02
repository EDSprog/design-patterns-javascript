import { Adapter } from './adapter.js';
import { Adaptee } from './adaptee.js';

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

const jsonArray = [
    { key1: 'value1', key2: 'value2' },
    { key1: 'value3', key2: 'value4' }
];

(() => {
    adapter.request(jsonArray);
})()

/**
 * Adapter pattern allows objects with incompatible interfaces to collaborate.
 * Output:
 * Adaptee: working on specific request with array [["key1","key2"],["value1","value2"],["value3","value4"]]
 */

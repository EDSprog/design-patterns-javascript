import { Target } from './target.js';

export class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }

    request(specificJsonArray) {
        const csv = [Object.keys(specificJsonArray[0])];
        for (const entry of specificJsonArray) {
            const csvRow = [];
            for (const key in entry) {
                csvRow.push(entry[key]);
            }
            csv.push(csvRow);
        }
        this.adaptee.specificRequest(csv);
    }
}

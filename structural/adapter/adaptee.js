export class Adaptee {
    specificRequest(specificCsv) {
        if (Array.isArray(specificCsv)) {
            console.log(`Adaptee: working on specific request with array ${JSON.stringify(specificCsv)}`);
        } else {
            throw new Error('Adaptee: specificCsv argument should be an array');
        }
    }
}

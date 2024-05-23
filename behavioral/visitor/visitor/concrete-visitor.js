export class ConcreteVisitor {
    visitConcreteElementA(concreteElementA) {
        console.log('Run visitConcreteElementA in ConcreteVisitor');
        concreteElementA.operationA();
    }

    visitConcreteElementB(concreteElementB) {
        console.log('Run visitConcreteElementA in ConcreteVisitor');
        concreteElementB.operationB();
    }
}

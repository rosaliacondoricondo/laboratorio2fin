class logicGame {
    constructor () {}
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
    process() {
        throw new Error("this is a abstract funcion can't be called");
        
    }
}
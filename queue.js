// Passo1: Modelagem
class Queue {
    constructor() {
        this.data = []
    }
    
    enqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou na fila!`);
    }

    dequeue() {
        const item = this.data.shift();
        console.log(`${item} saiu da fila!`);
    }
}

// Passo2: Utilizando
const fila = new Queue();

fila.enqueue('Mariana');
fila.enqueue('João');
fila.enqueue('Nay');
fila.dequeue();
fila.dequeue();
fila.dequeue();
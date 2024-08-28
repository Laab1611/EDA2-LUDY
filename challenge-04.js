class ATM {
    constructor (name, arriveTime){
        this.name = name;
        this.arriveTime = arriveTime;
        this.queue = [];
    }

    enqueue(name, arriveTime){
        const newPerson = new ATM(name, arriveTime);
        this.queue.push(newPerson);
        return this.queue;
    }

    dequeue(){
        let deleted = this.queue.shift();
        return `The person "${deleted}" has been deleted`;
    }

    peek(){
        const person = this.queue[0];
        return `The person "${person}" is the next in line`;
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    printQueue(){
        this.queue.forEach((person, index) => {
            console.log(`Person ${index + 1}: ${person.name}, Arrive Time: ${person.arriveTime}`);
        });
    }
}

console.log();
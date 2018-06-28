// import Queue from 'Queue.js'
const Queue = require('./queue');

const weave = (queueA, queueB) => {

    console.log(queueA, queueB)
    const finalQ = new Queue;

    while (queueA.peek()) {
        finalQ.add(queueA.remove());
        if (queueB.peek()) {
            finalQ.add(queueB.remove());
        }
    }

    while (queueB.peek()) {
        finalQ.add(queueB.remove());
    }

    console.log(finalQ)

}

const queueA = new Queue
const queueB = new Queue
queueA.add(1)
queueA.add(2)
queueB.add('Hi')
queueB.add('There')

weave(queueA, queueB)

queueA.add(1)
queueA.add(2)
queueB.add('Hi')
queueB.add('There')
queueB.add('extra')

weave(queueA, queueB)
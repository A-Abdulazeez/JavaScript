queue = [];
queueSize = 0;

function isEmpty() {
     return queue.length === 0;
}

function enqueue(item) {
     queue[queueSize++] = item;
}

function dequeue() {
     if(isEmpty()){
          return undefined;
     }
     queueSize--;
     const value = queue[0];
     queue.shift();

     return value;
}

function clear() {
     queue = [];
     queueSize = 0;
}

function front(){
     if(isEmpty()){
          return undefined;
     }

     return queue[0];
}

function rear() {
     if(isEmpty()){
          return undefined;
     }

     return queue[queueSize - 1];
}

function size() {
     return queue.length;
}

function getValues() {
     return queue;
}

module.exports = { isEmpty, enqueue, dequeue, clear, front, rear, size, getValues };
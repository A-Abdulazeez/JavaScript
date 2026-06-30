let stack = [];
let stackSize = 0;

function isEmpty() {
    return stack.length === 0;
}

function push(item) {
    stack[stackSize++] = item;
}

function pop() {
    if (isEmpty()) {
        return undefined;
    }

    stackSize--;
    const value = stack[stackSize];
    stack.length = stackSize;
    
    return value;
}

function clear() {
    stack = [];
    stackSize = 0;
}

function peek() {
    if(isEmpty()) {
        return undefined;
    }
    return  stack[stackSize - 1]
}

function size() {
    return stackSize;
}

function getStackvalues() {
    return stack;
}

module.exports = { isEmpty, push, pop, clear, peek, size, getStackvalues };
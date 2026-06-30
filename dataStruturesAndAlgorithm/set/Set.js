let mySet = [];
let setSize = 0;

function isEmpty() {
    return mySet.length === 0;
}

function add(item) {
    if (!mySet.includes(item)) {
        mySet[setSize++]= item;
    }
}

function remove(item) {
    if (mySet.includes(item)) {
        for (let index = 0; index < mySet.length; index++) {
            mySet[index] = mySet[index + 1];
        }
        mySet.length--;     
    }
}

function clear() {
    mySet = [];
    setSize = 0;
}

function has(item) {
    if (mySet.includes(item)) {
        return true;
    }
    return false;
}

function size() {
    return mySet.length;
}

function getSetValues() {
    return mySet;
}

module.exports = { isEmpty, add, remove, clear, has, size, getSetValues };

const stackTest = require('./Stack');

beforeEach(() => {
    stackTest.clear();
});

test("that the stack is empty ", () => {
    expect(stackTest.isEmpty()).toBe(true);
});

test("that the stack is not empty when i pushed an item ", () => {
    stackTest.push(1);
    expect(stackTest.isEmpty()).toBe(false);
});

test("that the stack is empty when i pushed an item and then cleared it ", () => {
    stackTest.push(1);
    expect(stackTest.isEmpty()).toBe(false);
    stackTest.clear();
    expect(stackTest.isEmpty()).toBe(true);
});

test("that the stack is empty when i pushed an item and then popped it", () => {
    stackTest.push(1);
    expect(stackTest.isEmpty()).toBe(false);
    stackTest.pop();
    expect(stackTest.isEmpty()).toBe(true);
});

test("that the stack is not empty when i pushed two items and then popped one ", () => {
    stackTest.push(1);
    stackTest.push(2);
    expect(stackTest.isEmpty()).toBe(false);
    stackTest.pop();
    expect(stackTest.isEmpty()).toBe(false);
});

test("that the peek returns the top item in the stack without removing the item from the stack", () => {
    stackTest.push(1);
    stackTest.push(2);
    stackTest.push(3);
    expect(stackTest.isEmpty()).toBe(false);
    stackTest.peek();
    expect(stackTest.peek()).toBe(3);
});

test("that the peek returns undefined when the stack is empty", () => {
    expect(stackTest.isEmpty()).toBe(true);
    expect(stackTest.peek()).toBe(undefined);
});

test("test to return the size of the stack", () => {
    stackTest.push(1);
    stackTest.push(2);
    stackTest.push(3);
    expect(stackTest.isEmpty()).toBe(false);
    expect(stackTest.size()).toBe(3);
});

test("test to return all values in the stack", () => {
    stackTest.push(1);
    stackTest.push(2);
    stackTest.push(3);
    stackTest.push(4);
    stackTest.pop();
    expect(stackTest.isEmpty()).toBe(false);
    expect(stackTest.size()).toBe(3);
    expect(stackTest.getStackvalues()).toEqual([1, 2, 3]);
});


const queueTest = require('./Queue');

beforeEach(() => {
    queueTest.clear();
});

test("test that queue is empty", () => {
    expect(queueTest.isEmpty()).toBe(true);
});

test("test that queue is not empty when i push an item", () => {
    queueTest.enqueue("cat");
    expect(queueTest.isEmpty()).toBe(false);
});

test("test that queue is empty when i enqueue and dequeue an item", () => {
    queueTest.enqueue("cat");
    expect(queueTest.isEmpty()).toBe(false);
    queueTest.dequeue();
    expect(queueTest.isEmpty()).toBe(true);
});

test("test that front returns the item at the front of the queue without removing it from the queue", () => {
    queueTest.enqueue("cat");
    queueTest.enqueue("bat");
    queueTest.enqueue("pig");
    expect(queueTest.isEmpty()).toBe(false);

    expect(queueTest.front()).toEqual("cat");
});

test("test that rear returns the item at the back of the queue without removing it from the queue", () => {
    queueTest.enqueue("cat");
    queueTest.enqueue("bat");
    queueTest.enqueue("pig");
    expect(queueTest.isEmpty()).toBe(false);

    expect(queueTest.rear()).toEqual("pig");
});

test("test to determine the size of queue", () => {
    queueTest.enqueue("cat");
    queueTest.enqueue("bat");
    queueTest.enqueue("pig");
    expect(queueTest.isEmpty()).toBe(false);

    expect(queueTest.size()).toEqual(3);
});

test("test to get all values in the queue", () => {
    queueTest.enqueue("cat");
    queueTest.enqueue("bat");
    queueTest.enqueue("pig");
    expect(queueTest.isEmpty()).toBe(false);
    expect(queueTest.size()).toEqual(3);
    expect(queueTest.getValues()).toEqual(["cat", "bat", "pig"]);
});


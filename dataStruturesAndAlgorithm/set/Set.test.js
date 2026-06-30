const setTest = require('./Set');

beforeEach(() => {
    setTest.clear();
});


test("test that set is empty", () => {
    expect(setTest.isEmpty()).toBe(true);
});

test("test that set is not empty", () => {
    setTest.add(1);
    expect(setTest.isEmpty()).toBe(false);
});

test("test that set adds unique items", () => {
    setTest.add(2);
    setTest.add(3);
    expect(setTest.isEmpty()).toBe(false);
});

test("test that set does not add duplicate items", () => {
    setTest.add(1);
    setTest.add(1);
    expect(setTest.isEmpty()).toBe(false);
});

test("test that remove removes an item from the set", () => {
    setTest.add(4);
    expect(setTest.isEmpty()).toBe(false);
    setTest.remove(4);
    expect(setTest.isEmpty()).toBe(true);
});

test("test that an item exist in a set", () =>{
    setTest.add(1);
    setTest.add(2);
    setTest.add(3);
    setTest.add(4);
    expect(setTest.isEmpty()).toBe(false);

    expect(setTest.has(3)).toBe(true);
});

test("test that an item not exist in a set returns false", () =>{
    setTest.add(1);
    setTest.add(2);
    expect(setTest.isEmpty()).toBe(false);

    expect(setTest.has(3)).toBe(false);
});

test("test to get the size of my set", () =>{
    setTest.add(1);
    setTest.add(2);
    expect(setTest.isEmpty()).toBe(false);

    expect(setTest.size()).toEqual(2);
});

test("test to return all values in the set", () => {
    setTest.add(1);
    setTest.add(2);
    setTest.add(3);
    setTest.add(4);
    expect(setTest.isEmpty()).toBe(false);

    expect(setTest.getSetValues()).toEqual([1,2,3,4]);
});

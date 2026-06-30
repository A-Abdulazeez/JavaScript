const movesAllZerosInAnArray  = require("./movesAllZerosInAnArray")

test("test that all zeros moved to the end of the list", ()=>{
    const result = movesAllZerosInAnArray.movesAllZerosInAnArray([0, 1, 0, 3, 12])
    let actual = [1, 3, 12, 0, 0]
    expect(result).toStrictEqual(actual)
})
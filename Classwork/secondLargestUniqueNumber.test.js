const secondLargestUniqueNumber  = require("./secondLargestUniqueNumber")

test("test that I get the second largest in a list of number", ()=>{
    let arrayy = [10, 5, 20, 8]
    const result = secondLargestUniqueNumber.secondLargestUniqueNumber(arrayy)
    expect(result).toBe(10)
})
function  movesAllZerosInAnArray(array){
    let temporary = 0
    for (let count = 0; count < array.length; count++){
        for (let counter = count + 1; counter < array.length; counter++){
            if (array[count] <= 0){
                temporary = array[count]
                array[count] = array[counter]
                array[counter] = temporary
            }
        }
    }
    return array

}


module.exports = {movesAllZerosInAnArray}
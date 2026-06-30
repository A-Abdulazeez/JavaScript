function secondLargestUniqueNumber(array){
    let largest = array[0]
    let secondLargest = array[0]

     for (let number in array) {
        if (array[number] > largest){
            secondLargest = largest
            largest = array[number]
        } 
        else if (array[number] > secondLargest && array[number] !== largest) {
            secondLargest = array[number]
        }
    }

    return secondLargest
}



module.exports = {secondLargestUniqueNumber}
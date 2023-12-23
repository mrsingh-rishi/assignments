/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        if(max < num){
            max = num;
        }
    }

    return max === Number.NEGATIVE_INFINITY ? undefined : max;
}

module.exports = findLargestElement;
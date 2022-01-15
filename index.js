// Test cases.
sortedSquareArray([1, 2, 3, 5, 6, 8, 9]),

sortedSquareArray( [-2, -1]),

sortedSquareArray([-10, -5, 0, 5, 10])


/**
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order
 * and returns a new array of the same length with the sortedSquareArray of the original integers also sorted in ascending order. 
 * 
 * 
 * @param { array } arr array
 * @returns { array }
 */
function sortedSquareArray( arr ) {
    return arr.map( value => value * value )
        .sort( ( a, b ) => a - b);
}
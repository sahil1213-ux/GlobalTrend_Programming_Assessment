// Write a function that takes a nested array and returns a flattened array.


function flattenArray(nestedArray) {
    // If an element is an array, recursively flatten it
    // reduce takes two arguments a callback function and a initial Array  
    return nestedArray.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []); // Start with an empty array as the initial value
}


const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7]
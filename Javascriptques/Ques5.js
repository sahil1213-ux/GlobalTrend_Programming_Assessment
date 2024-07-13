// Write a function that takes an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
    return [...new Set(arr)]; // here spread operator is used
  }
  
console.log(removeDuplicates(['3','4', '3', '5', '5', '87', '12', '12', '53', '12' ]));
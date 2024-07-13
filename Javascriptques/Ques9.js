// Write a function that filters out even numbers from an array.

function FilterEvenNos(arr) {
    return arr.filter(num => num % 2 !== 0 );
}

console.log(FilterEvenNos([1,5,2,8,48,92,71,48,11]));
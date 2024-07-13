// Write a function that takes a string and capitalizes the first letter of each word in the string.

function capitalizeString(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

console.log(capitalizeString('sahil is my friend'))
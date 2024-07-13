// Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz"

// Arrow function is used
const printFizzBuzz = () => {
    let output = '';
    for (let i = 1; i <= 100; i++) {
        let text = '';
        if (i % 3 === 0) text += 'Fizz';
        if (i % 5 === 0) text += 'Buzz';
        output += text || i;
        output += ' ';
    }
    console.log(output.trim());
};

printFizzBuzz();

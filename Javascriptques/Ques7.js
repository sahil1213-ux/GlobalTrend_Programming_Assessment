// Write a function that generates the first n numbers of the Fibonacci sequence.

function generateFibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
  }

console.log(generateFibonacci(13));
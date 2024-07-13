// Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function evaluateSimpleExpression(expression) {
    // below the tokens is the array of numbers and operators 
    const tokens = expression.trim().split(/([+-])/).filter(Boolean);
    let result = parseInt(tokens[0], 10);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseInt(tokens[i + 1], 10);

        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
        }
    }

    return result;
}

console.log(evaluateSimpleExpression("10+2000+5-45")); 
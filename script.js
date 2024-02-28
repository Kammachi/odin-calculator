function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === 0) return "NO"
    return n1 / n2;
}



function operate(n1, n2, operator) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    switch (operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "x":
            return multiply(n1, n2);
        case "÷":
            return divide(n1, n2);
        default:
            return "";
    }
}

const displaySpace = document.querySelector('#display');
const numbers = document.querySelectorAll('.digit, .operator-button');

let displayValue;

numbers.forEach((number) => number.addEventListener('click', () => {
    displaySpace.textContent += number.textContent;
    displayValue = displaySpace.textContent;
}));


const evaluateButton = document.querySelector('#evaluate');


evaluateButton.addEventListener('click', () => {
    displaySplit = displayValue.split(" ");
    const number1 = displaySplit[0];
    const operator = displaySplit[1];
    const number2 = displaySplit[2];
    displayValue = operate(number1, number2, operator);
    displaySpace.textContent = displayValue;
});
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


const display = document.querySelector('#display');

let number1;
let operator;
let operatorLast = false;


const numbers = document.querySelectorAll('.digit');

numbers.forEach((number) => number.addEventListener('click', () => {
    if (operator && operatorLast == true || display.textContent == "NO") {
        display.textContent = "";
    }

    display.textContent += number.value;
    operatorLast = false;
}));


const operators = document.querySelectorAll('.operator-button');

operators.forEach((operatorKey) => operatorKey.addEventListener('click', () => {
    
    if (!operatorLast) {
        if (!operator) {
            number1 = display.textContent;
            display.textContent = "";
        } else {
            number1 = operate(number1, display.textContent, operator)

            if (number1.toString().length > 10) {
                number1 = Math.round(number1 * 100000000) / 100000000;
            }

            display.textContent = number1;
        }
    }

    operator = operatorKey.value;
    operatorLast = true;

}));


const evaluateButton = document.querySelector('#evaluate');

evaluateButton.addEventListener('click', () => {
    if (number1 && display.textContent) {
        number1 = operate(number1, display.textContent, operator)

        if (number1.toString().length > 10) {
            number1 = Math.round(number1 * 100000000) / 100000000;
        }

        display.textContent = number1;
        operator = null;
    } else {
        display.textContent = number1;
    }
});


const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    number1 = null;
    operator = null;
    operatorLast = false;
    display.textContent = "";
});
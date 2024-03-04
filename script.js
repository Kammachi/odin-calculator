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
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    switch (operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "x":
            return multiply(n1, n2);
        case "/":
            return divide(n1, n2);
        default:
            return "ERROR";
    }
}


let number1;
let operator;
let operatorLast = false;

const calcDisplay = document.querySelector('#display');

const numbers = document.querySelectorAll('.digit');

numbers.forEach((number) => number.addEventListener('click', () => {
    if (operator && operatorLast == true || calcDisplay.textContent == "NO") {
        calcDisplay.textContent = "";
    }

    if (number.value == "." && calcDisplay.textContent.includes(".")) return;

    if (calcDisplay.textContent.length > 15) return;

    if (calcDisplay.textContent === "0") {
        calcDisplay.textContent = number.value;
    } else {
        calcDisplay.textContent += number.value;
    }

    operatorLast = false;
}));


const operators = document.querySelectorAll('.operator-button');

operators.forEach((operatorKey) => operatorKey.addEventListener('click', () => {
    
    if (!operatorLast) {
        if (!operator) {
            number1 = calcDisplay.textContent;
            calcDisplay.textContent = "";
        } else {
            number1 = operate(number1, calcDisplay.textContent, operator)

            if (number1.toString().length > 15) {
                number1 = Math.round(number1 * 10**15) / 10**15;
            }

            calcDisplay.textContent = number1;
        }
    }

    operator = operatorKey.value;
    operatorLast = true;
}));


const evaluateButton = document.querySelector('.evaluate');

evaluateButton.addEventListener('click', () => {
    if (number1 && calcDisplay.textContent) {
        number1 = operate(number1, calcDisplay.textContent, operator)

        if (number1.toString().length > 15) {
            number1 = Math.round(number1 * 10**15) / 10**15;
        }

        calcDisplay.textContent = number1;
        operator = null;
    }
});


const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    number1 = null;
    operator = null;
    operatorLast = false;
    calcDisplay.textContent = "";
});


const deleteButton = document.querySelector('.delete');

deleteButton.addEventListener('click', () => {

    if (calcDisplay.textContent.length === 1) {
        calcDisplay.textContent = 0;
    } else if (calcDisplay.textContent.length > 1) {
        calcDisplaySplit = calcDisplay.textContent.split("");
        calcDisplaySplit.pop();
        calcDisplay.textContent = calcDisplaySplit.join("");
    }
});


document.addEventListener('keydown', (event) => {

    console.log(event)

    const selected = document.getElementById(event.key);
    
    if (!selected) {
        return;
    }

    let clickEvent = new Event('click');

    selected.dispatchEvent(clickEvent);
});

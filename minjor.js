const display = document.getElementById('display');

// Initialize display with 0
display.value = "0";

function clearDisplay() {
    display.value = "0";
}

function appendNumber(number) {
    if (display.value === "0" || display.value === "Error") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    if (display.value === "Error") {
        display.value = "0";
    }

    if (display.value === "0" && (operator === '-' || operator === '(')) {
        display.value = operator;
    } else if (operator === '(') {
        display.value += operator;
    } else if (display.value && !isOperator(display.value.slice(-1))) {
        display.value += operator;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

function square() {
    if (display.value) {
        display.value = Math.pow(parseFloat(display.value), 2);
    }
}

function deleteLast() {
    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

document.getElementById("display").addEventListener("click", function() {
    this.focus();
});

function appendNegative() {
    if (display.value === "0" || display.value === "Error") {
        display.value = "-";
    } else if (display.value && !isOperator(display.value.slice(-1))) {
        display.value += "-";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

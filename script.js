const screen = document.getElementById('calc-screen');
let currentInput = '';
let operator = '';
let previousInput = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const number = button.dataset.number;
        const operation = button.dataset.operator;
        const decimal = button.dataset.decimal;

        if (number) {
            currentInput += number;
            screen.value += number; 
        } else if (operation) {
            if (currentInput) {
                operator = operation;
                previousInput += currentInput + " " + operator + " "; 
                screen.value = previousInput; 
                currentInput = '';
            }
        } else if (decimal) {
            if (!currentInput.includes('.')) {
                currentInput += decimal;
                screen.value += decimal; 
            }
        }
    });
});

document.getElementById('equal').addEventListener('click', function() {
    if (previousInput && currentInput) {
        calculate();
    }
});

document.getElementById('ac').addEventListener('click', function() {
    currentInput = '';
    previousInput = '';
    operator = '';
    screen.value = '';
});

document.getElementById('del').addEventListener('click', function() {
    currentInput = currentInput.slice(0, -1);
    screen.value = previousInput + currentInput; 
});

function calculate() {
    let result = 0;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
    }

    screen.value = result;
    previousInput = result.toString(); 
    currentInput = '';
    operator = '';
}

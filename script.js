function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

let num1 = '', operator = '', num2 = '';

function operate(operator, num1, num2) {
	switch (operator) {
		case '+': {
			return add(num1, num2);
		}
		case '-': {
			return subtract(num1, num2);
		}
		case '*': {
			return multiply(num1, num2);
		}
		case '/': {
			return divide(num1, num2);
		}
	}
}

const display = document.querySelector('#input');
const memory = document.querySelector('#memory');
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.querySelector('#equals-button');
const clearButton = document.querySelector('#clear-button');

numberButtons.forEach((button) => {
	button.addEventListener('click', (event) => {

		// Handle single decimal point
		// Alternatively, could disable the . button
		if (event.target.textContent === '.' && display.textContent.includes('.')) {
			return;
		}

		if (operator === '') {
			num1 += event.target.textContent;
			display.textContent = num1;
		} else {
			num2 += event.target.textContent;
			display.textContent = num2;
		}

	});
});

operatorButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		// Handle performing operations on previous result
		if (num1 === '' && display.textContent !== '') {
			num1 = display.textContent;
		}

		// Handle operation chaining
		if (num2 !== '') {
			num1 = operate(operator, +num1, +num2);
			num2 = '';
		}

		operator = event.target.textContent;
		memory.textContent = `${num1} ${operator} ${num2}`;
		display.textContent = ''
	});
});

equalsButton.addEventListener('click', (event) => {
	if (num1 !== '' && operator !== '' && num2 !== '') {
		memory.textContent += ` ${num2} =`;
		display.textContent = operate(operator, +num1, +num2);;
		num1 = '';
		operator = '';
		num2 = '';
	}
});

clearButton.addEventListener('click', (event) => {
	display.textContent = '';
	memory.textContent = '';
	num1 = '';
	operator = '';
	num2 = '';
});
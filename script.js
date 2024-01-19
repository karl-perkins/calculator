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

let num1, operator, num2;

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

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-button');

numberButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		display.textContent += event.target.textContent;
	});
});

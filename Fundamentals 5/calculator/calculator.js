function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	return array.reduce((total, number) => {
		return total + number;
	}, 0);
	
}

function multiply(array) {
	return array.reduce((total, number) => {
		return total * number;
	})
}

function power(a, b) {
	return a**b;
}

function factorial(number) {
	let factor = 1;
	for (let i = 1; i <= number; i++) {
		factor = i * factor;
	}
	return factor;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
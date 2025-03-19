// calculator.test.js

const Calculator = require('./calculator');

describe('Calculator Operations', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('Addition: 5 + 3 = 8', () => {
        expect(calc.add(5, 3)).toBe(8);
    });

    test('Subtraction: 10 - 4 = 6', () => {
        expect(calc.subtract(10, 4)).toBe(6);
    });

    test('Multiplication: 6 * 7 = 42', () => {
        expect(calc.multiply(6, 7)).toBe(42);
    });

    test('Division: 9 / 3 = 3', () => {
        expect(calc.divide(9, 3)).toBe(3);
    });

    test('Division by zero should throw an error', () => {
        expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
    });
});


console.log('Archivo calculadora.js cargado correctamente');

const operation = parseInt(prompt(`
    ****Ingrese la operación:****
    1. Suma
    2. Resta
    3. Multiplicación
    4. División
    ******************************
`));

if (operation >= 1 && operation <= 4) {
    const num1 = parseFloat(prompt('Ingrese el primer número: '));
    const num2 = parseFloat(prompt('Ingrese el segundo número: '));

    let result;

    if (operation === 1) {
        result = num1 + num2;
    } else if (operation === 2) {
        result = num1 - num2;
    } else if (operation === 3) {
        result = num1 * num2;
    } else if (operation === 4) {
        result = num1 / num2;
    }

    alert(`El resultado es: ${result}`);
} else {
    alert('Operación no válida');
}
function calcularOperaciones() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, ingrese números válidos.");
        return;
    }

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num2 !== 0 ? (num1 / num2) : "No se puede dividir por cero";

    console.log(`Resultados:\nSuma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`);
}

calcularOperaciones();

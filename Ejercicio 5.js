function calcularRectangulo() {
    let ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"));
    let alto = parseFloat(prompt("Ingresa el alto del rectángulo:"));

    if (isNaN(ancho) || isNaN(alto)) {
        console.log("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    let area = ancho * alto; // Fórmula del área: base * altura
    let perimetro = 2 * (ancho + alto); // Fórmula del perímetro: 2 * (base + altura)

    console.log(`El área del rectángulo es: ${area}`);
    console.log(`El perímetro del rectángulo es: ${perimetro}`);
}

calcularRectangulo();

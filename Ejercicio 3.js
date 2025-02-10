function adivinarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
    let intento;
    let intentos = 0;

    while (true) {
        intento = parseInt(prompt("Adivina el número entre 1 y 100:"));
        intentos++;

        if (isNaN(intento)) {
            console.log("Por favor, ingresa un número válido.");
            continue;
        }

        if (intento > numeroAleatorio) {
            console.log("Es más bajo. Intenta de nuevo.");
        } else if (intento < numeroAleatorio) {
            console.log("Es más alto. Intenta de nuevo.");
        } else {
            console.log(`¡Felicidades! Has adivinado el número ${numeroAleatorio} en ${intentos} intentos.`);
            break;
        }
    }
}

adivinarNumero();

function convertirWattsAHp(watts) {
    return watts / 745.7; // 1 hp = 745.7 W
}

function convertirHpAWatts(hp) {
    return hp * 745.7; // 1 hp = 745.7 W
}

function pedirValores() {
    let opcion = prompt("¿Deseas convertir de watts a caballos de fuerza (1) o de caballos de fuerza a watts (2)?");
    let valor;
    if (opcion === "1") {
        valor = parseFloat(prompt("Ingresa el valor en watts:"));
        if (isNaN(valor)) {
            console.log("Por favor, ingresa un número válido.");
            return;
        }
        let hp = convertirWattsAHp(valor);
        console.log(`${valor} watts son equivalentes a ${hp.toFixed(2)} caballos de fuerza.`);
    } else if (opcion === "2") {
        valor = parseFloat(prompt("Ingresa el valor en caballos de fuerza:"));
        if (isNaN(valor)) {
            console.log("Por favor, ingresa un número válido.");
            return;
        }
        let watts = convertirHpAWatts(valor);
        console.log(`${valor} caballos de fuerza son equivalentes a ${watts} watts.`);
    } else {
        console.log("Opción no válida.");
    }
}

pedirValores();

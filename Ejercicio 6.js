class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    encender() {
        console.log(`El coche ${this.marca} ${this.modelo} del año ${this.año} está encendido.`);
    }
}

// Solicitar datos al usuario
let marca = prompt("Ingresa la marca del coche:");
let modelo = prompt("Ingresa el modelo del coche:");
let año = parseInt(prompt("Ingresa el año del coche:"));

// Crear una instancia de la clase Coche con los datos proporcionados por el usuario
let miCoche = new Coche(marca, modelo, año);

// Llamar al método encender
miCoche.encender();

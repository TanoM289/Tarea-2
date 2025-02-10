// Definición de la clase Producto
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  // Método para agregar unidades al inventario
  agregarUnidades(cantidad) {
    this.cantidad += cantidad;
    console.log(`${cantidad} unidades de ${this.nombre} agregadas al inventario.`);
  }

  // Método para quitar unidades del inventario
  quitarUnidades(cantidad) {
    if (this.cantidad >= cantidad) {
      this.cantidad -= cantidad;
      console.log(`${cantidad} unidades de ${this.nombre} quitadas del inventario.`);
    } else {
      console.log(`No hay suficientes unidades de ${this.nombre} en el inventario.`);
    }
  }

  // Método para mostrar la información del producto
  mostrarInfo() {
    console.log(`\nProducto: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log(`Cantidad en inventario: ${this.cantidad}`);
  }
}

// Solicitar datos al usuario
let nombre = prompt("Ingresa el nombre del producto:");
let precio = parseFloat(prompt("Ingresa el precio del producto:"));
let cantidad = parseInt(prompt("Ingresa la cantidad inicial del producto:"));

// Crear una instancia de la clase Producto con los datos ingresados
let producto1 = new Producto(nombre, precio, cantidad);

// Probar los métodos
producto1.mostrarInfo();

// Pedir al usuario agregar unidades
let agregar = parseInt(prompt("¿Cuántas unidades deseas agregar al inventario?"));
producto1.agregarUnidades(agregar);
producto1.mostrarInfo();

// Pedir al usuario quitar unidades
let quitar = parseInt(prompt("¿Cuántas unidades deseas quitar del inventario?"));
producto1.quitarUnidades(quitar);
producto1.mostrarInfo();

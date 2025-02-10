// Solicitar al usuario ingresar una contraseña
let contrasena = prompt("Ingresa tu contraseña:");

// Verificar si la contraseña tiene 8 o más caracteres
if (contrasena.length >= 8) {
  console.log("¡Contraseña exitosa! La contraseña es válida.");
} else {
  console.log("Error: La contraseña debe tener al menos 8 caracteres.");
}

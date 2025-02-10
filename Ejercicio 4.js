function saludarUsuario() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let apellido = prompt("¿Cuál es tu apellido?");
    
    // Unir el nombre y apellido, luego convertir a mayúsculas
    let nombreCompleto = (nombre + " " + apellido).toUpperCase();
    
    // Mostrar el mensaje de bienvenida
    console.log(`¡Bienvenido, ${nombreCompleto}!`);
}

saludarUsuario();

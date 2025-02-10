// Solicitar al usuario ingresar 5 números
let numeros = [];
for (let i = 0; i < 5; i++) {
  let num = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  numeros.push(num);
}

// Calcular la suma
let suma = numeros.reduce((acc, curr) => acc + curr, 0);

// Calcular el promedio
let promedio = suma / numeros.length;

// Encontrar el número mayor y el número menor
let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);

// Mostrar los resultados en la consola
console.log(`Suma: ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);

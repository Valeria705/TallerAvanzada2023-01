// Creamos dos arrays vacíos para almacenar las edades y los códigos
let edades = [];
let codigos = [];

// Generamos 20 números aleatorios y los agregamos al array de edades y al de códigos
for (let i = 0; i < 20; i++) {
  edades.push(Math.floor(Math.random() * 100));
  codigos.push(Math.floor(Math.random() * 100000));
}

// Establecemos la primera edad del array como la mayor edad y el número de repeticiones en 1
let mayorEdad = edades[0];
let numRepeticiones = 1;

// Recorremos el array de edades y comparamos cada edad con la mayor edad actual.
// Si encontramos una edad mayor, la establecemos como la nueva mayor edad y reiniciamos el contador de repeticiones a 1.
// Si encontramos una edad igual a la mayor edad, incrementamos el contador de repeticiones.

edades.forEach(function(edad) {
  if (edad > mayorEdad) {
    mayorEdad = edad;
    numRepeticiones = 1;
  } else if (edad === mayorEdad) {
    numRepeticiones++;
  }
});

console.log(`La mayor edad es ${mayorEdad} y se repite ${numRepeticiones} veces.`);

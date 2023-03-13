
function numeroMasCercanoACero(numeros) {
  let numeroMasCercano = numeros[0];

  numeros.forEach(function(numero) {
    const distanciaNumeroActual = Math.abs(numero);

    if (distanciaNumeroActual < Math.abs(numeroMasCercano) && numero !== 0) {
      numeroMasCercano = numero;
    }
  });

  return numeroMasCercano;
}

const numeros = [-10, 8, -2, 6, -4, -7, 5, 3, -1, 9, 7, -6, -8, 2, 1, 0, 4, -3, -5, 10];
const numeroMasCercano = numeroMasCercanoACero(numeros);
console.log(`El número más cercano a cero es ${numeroMasCercano}.`);

//flecha
// const numeroMasCercanoACero = (numeros) => {
//   let numeroMasCercano = numeros[0];

//   numeros.forEach((numero) => {
//     const distanciaNumeroActual = Math.abs(numero);

//     if (distanciaNumeroActual < Math.abs(numeroMasCercano) && numero !== 0) {
//       numeroMasCercano = numero;
//     }
//   });

//   return numeroMasCercano;
// };

// const numeros = [-10, 8, -2, 6, -4, -7, 5, 3, -1, 9, 7, -6, -8, 2, 1, 0, 4, -3, -5, 10];
// const numeroMasCercano = numeroMasCercanoACero(numeros);
// console.log(`El número más cercano a cero es ${numeroMasCercano}.`);

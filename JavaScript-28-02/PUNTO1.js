// tradicional
function calcularDistancia(x1, y1, x2, y2) {
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
  }

  let distancia = calcularDistancia(10, 5, 20, 15);
  
  console.log("La distancia entre NABOO y el planeta en la ruta N-14 es: " + distancia + " UA");

  //funcion flecha

let calcularDistanciaF = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
let distanciaF = calcularDistanciaF(10, 5, 20, 15);

console.log("La distancia entre NABOO y el planeta en la ruta N-14 es: " + distanciaF + " UA");

// Se crean tres arrays con diferentes tipos de alimentos
const alimentosInsecto = [
  "avispas",
  "moscas",
  "cucarachas",
  "grillos",
  "libélulas",
];
const alimentosAnimales = [
  "ternera", 
  "Cerdo", 
  "buey", 
  "Pavo", 
  "Pollo"];
  
const alimentosVegetales = [
  "Apio",
  "Pepino",
  "Brócoli",
  "Zanahoria",
  "Cebolla",
];

// Se crea otro array que contiene los diferentes tipos de alimentos
const tipos = ["vegetal", "animal", "insecto"];

// Se crea un array vacío que almacenará los alimentos creados
const alimentos = [];

// Se crea un bucle que se ejecutará 300 veces
for (let i = 0; i < 300; i++) {
  // Para cada tipo de alimento, se ejecuta una función
  tipos.forEach(function (tipo) {
    if (tipo == "vegetal") {
      // Si el tipo de alimento es 'vegetal', se crea un objeto y se agrega al array 'alimentos'
      alimentosVegetales.forEach(function (vegetal) {
        alimentos.push({
          nombre: vegetal,
          tipo: "vegetal",
          nivelEnergia: Math.floor(Math.random() * 401) + 100,
        });
      });
    } else if (tipo == "animal") {
      // Si el tipo de alimento es 'animal', se crea un objeto y se agrega al array 'alimentos'
      alimentosAnimales.forEach(function (animal) {
        alimentos.push({
          nombre: animal,
          tipo: "animal",
          nivelEnergia: Math.floor(Math.random() * 401) + 100,
        });
      });
    } else {
      // Si el tipo de alimento es 'insecto', se crea un objeto y se agrega al array 'alimentos'
      alimentosInsecto.forEach(function (insecto) {
        alimentos.push({
          nombre: insecto,
          tipo: "insecto",
          nivelEnergia: Math.floor(Math.random() * 401) + 100,
        });
      });
    }
  });
}

// Se establece una espera de 5 segundos antes de ejecutar la siguiente función
setTimeout(function () {
  // Se filtra el array 'alimentos' para obtener los alimentos de tipo 'vegetal' que tienen más de 200 unidades de energía
  const vegetalesMasEnergia = alimentos.filter(function (alimento) {
    return alimento.tipo === "vegetal" && alimento.nivelEnergia > 200;
  });

  // Si no se encontraron alimentos vegetales con más de 200 unidades de energía, se muestra un mensaje y se sale de la función
  if (vegetalesMasEnergia.length === 0) {
    console.log(
      "No se encontraron alimentos vegetales con más de 200 unidades de energía"
    );
    return;
  }

  // Se crea una variable que almacenará la sumatoria de los niveles de energía de los alimentos vegetales encontrados
  let sumatoria = 0;

  // Se recorre el array de alimentos vegetales encontrados y se suma su nivel de energía a la variable 'sumatoria'
  vegetalesMasEnergia.forEach(function (vegetal) {
    sumatoria += vegetal.nivelEnergia;
  });
  console.log("La sumatoria de los niveles de energía de los alimentos vegetales es: " + sumatoria);
}, 5000);
// Se muestra un mensaje con la sumatoria de los niveles de energía de los alimentos vegetales

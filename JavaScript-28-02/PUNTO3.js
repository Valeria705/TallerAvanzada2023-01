//funcion tradicional
function calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima) {
    let temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return temperaturaMedia;
  }
  let temperaturaMediaDia1 = calcularTemperaturaMedia(25, 15); 
  console.log(temperaturaMediaDia1);

//funcion flecha
let calcularTemperaturaMediaF = (temperaturaMaximaF, temperaturaMinimaF) => {
    let temperaturaMediaF = (temperaturaMaximaF + temperaturaMinimaF) / 2;
    return temperaturaMediaF;
  }
  
  let temperaturaMediaDia1F = calcularTemperaturaMediaF(25, 15); 
  console.log(temperaturaMediaDia1F);
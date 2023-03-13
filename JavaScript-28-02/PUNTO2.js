//funcion tradicional
function ObtenerNombrePiloto(codigoNave) {
    let datosNave = codigoNave.split(":");
    let nombrePiloto = datosNave[1];
    console.log(nombrePiloto);
  }

  ObtenerNombrePiloto("ARQ2556: Nodin Chavdri");

  //funcion flecha
  let separarNombrePiloto = (codigoNave) => {
    let datosNave = codigoNave.split(":");
    let nombrePiloto = datosNave[1];
    console.log(nombrePiloto);
  }
  
  separarNombrePiloto("ARQ2555: Sara Bel-Sun");
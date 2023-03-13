//Funcion tradiiconal
function contarSablesNegativos(sablesDeLuz) {
    let sablesDefectuosos = 0;
    sablesDeLuz.forEach(function(sable) {
      if (sable < 0) {
        sablesDefectuosos++;
      }
    });
    return sablesDefectuosos;
  }

  let sablesDeLuz = [2, 4, -8, 5, -6];
  let sablesNegativos = contarSablesNegativos(sablesDeLuz);
  console.log(sablesNegativos);

  //Funcion flecha
  let contarSablesNegativosF = sablesDeLuzF => {
    let sablesDefectuososF = 0;
    sablesDeLuzF.forEach(sableF => {
      if (sableF < 0) {
        sablesDefectuososF++;
      }
    });
    return sablesDefectuososF;
  }
  
  let sablesDeLuzF = [2, 4, 5, -6];
  let sablesNegativosF = contarSablesNegativosF(sablesDeLuzF);
  console.log(sablesNegativosF);

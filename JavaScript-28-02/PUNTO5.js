//Tradicional
function calcularSalarioMensualLicenciaVendida(cantidadLicenciasVendidas) {
    let salarioBase = 3500000;
    let comisionPorLicencia = 1500000;
    let impuesto = 0.05;
  
    let totalComision = cantidadLicenciasVendidas * comisionPorLicencia;
    let totalDevengado = salarioBase + totalComision;
    let impuestosCalculados = totalDevengado * impuesto;
    let salarioMensual = totalDevengado - impuestosCalculados;
  
    return salarioMensual;
  }

  let cantidadLicenciasVendidas = 3;
  let salarioMensual = calcularSalarioMensualLicenciaVendida(cantidadLicenciasVendidas);
  console.log(`El salario mensual del vendedor es de $${salarioMensual}`);

  //Flecha

  let calcularSalarioMensualLicenciaVendidaF = (cantidadLicenciasVendidasF) => {
    let salarioBaseF = 3500000;
    let comisionPorLicenciaF = 1500000;
    let impuestoF = 0.05;
  
    let totalComisionF = cantidadLicenciasVendidasF * comisionPorLicenciaF;
    let totalDevengadoF = salarioBaseF + totalComisionF;
    let impuestosCalculadosF = totalDevengadoF * impuestoF;
    let salarioMensualF = totalDevengadoF - impuestosCalculadosF;
  
    return salarioMensualF;
  };
  
  // Ejemplo de uso
  let cantidadLicenciasVendidasF = 3;
  let salarioMensualF = calcularSalarioMensualLicenciaVendidaF(cantidadLicenciasVendidasF);
  console.log(`El salario mensual del vendedor es de $${salarioMensualF}`);
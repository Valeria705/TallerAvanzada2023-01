function crearEstudiante(nombre,planeta,edad,estatura,clasificarEstudiante){
  setTimeout(function(){
      let estudiante={
          nombre:nombre,
          edad:edad,
          planeta:planeta,
          estatura:estatura
      }
      clasificarEstudiante(estudiante.edad)

  },1000)
}
crearEstudiante("pedro","martes",18,1.86,function(edad){
  if (edad<15){
      console.log("Edad es " + edad + " su clase sera manejo de la fuerza")
  }else{
      console.log("Edad es " +edad+ " su clase sera uso de sable")
  }
})
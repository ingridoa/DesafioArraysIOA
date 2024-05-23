//4.imprimir listado de todos los pasciente

function imprimirListadoTotalPacientes(radiologia, traumatologia, dental) {
  // Unir todos los arrays de consultas en uno solo
  let todasLasConsultas = radiologia.concat(traumatologia, dental);

  // Obtener solo nombres de los pacientes
  let nombresPacientes = todasLasConsultas.map((consulta) => consulta.paciente);

  // Crear un contenedor para los párrafos
  let contenedor = document.createElement("div");

  // Crear un párrafo para cada nombre de paciente y agregarlo al contenedor
  nombresPacientes.forEach((nombre) => {
    let parrafo = document.createElement("p");
    parrafo.textContent = nombre;
    contenedor.appendChild(parrafo);
  });

  // Agregar el contenedor al cuerpo del documento
  document.body.appendChild(contenedor);
}

// Llamar a la función para imprimir el listado total de pacientes
imprimirListadoTotalPacientes(radiologia, traumatologia, dental);

//5.Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental

function filtrarPacientesISAPRE(consultas) {
  return consultas.filter((consulta) => consulta.prevision === "ISAPRE");
}

let pacientesISAPRE = filtrarPacientesISAPRE(
  radiologia.concat(traumatologia, dental)
);

console.log(pacientesISAPRE);
//filtrarPacientesISAPRE(pacientesISAPRE);


//6.Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología
function filtrarPacientesFONASA(consultas) {
    return consultas.filter((consulta) => consulta.prevision === "FONASA");
  }
  
  let pacientesFONASATraumatologia = filtrarPacientesFONASA(traumatologia);
  
  console.log(pacientesFONASATraumatologia);
  //filtrarPacientesFONASA(consultas)


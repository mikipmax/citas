import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

//Los PropTypes son para documentar funciones y objetos
function App() {
  //Citas con local storage
  //local storage solo almacena strings
  //con Json.parse convertimos arreglo a string
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  //Inicializamos las citas, cada carga y recarga
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  //                                      Esta parte seria [] pero como estamos
  //                                      usando local storage le pasamos este param
  const [citas, guardarCitas] = useState(citasIniciales);
  //funcion que tome las citas y agrega nuevas
  //useEffect siempre es un arrow function
  //Lo que paso como segundo parm, es el array que va tomar en cuenta
  //para detectar cambios
  useEffect(() => {
    //Debemos redeclarar citasIniciales para quitar el warning de falta de dependencias.
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Eliminar citas
  const eliminarCita = (cita) => {
    const nuevasCitas = citas.filter((cit) => cita.id !== cit.id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus Citas";
  return (
    //framework skeleton
    <Fragment>
      <h1>Administrar pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column ">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}




export default App;

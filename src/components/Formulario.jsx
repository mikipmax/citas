
import React, { Fragment,useState } from 'react'
import shortid from "shortid"
import PropTypes from "prop-types";
const Formulario = ({crearCita}) => {
    const [cita, actualizarCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });
//Función que se eejcuta cada que el usuario escribe en un input
const actualizarState=e=>{
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
}

//Extraer valores
const {mascota,propietario,fecha,hora,sintomas}=cita;
//Cuando da click en agregar cita
const submitCita=e=>{
    //Anulo metodo get, y lo paso a post
    e.preventDefault();
    cita.id=shortid();
    crearCita(cita);
    actualizarCita({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });
}
    return (
        <Fragment>

            <h2>Crear Cita</h2>
            <form
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                    required={true}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    onChange={actualizarState}
                    value={propietario}
                    required={true}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                    required={true}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                    required={true}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                    required={true}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width buttonP"
                    required={true}
                >Agregar Cita</button>

            </form>
        </Fragment>


    );
}

//Aquí se documentan los componentes
Formulario.propTypes={
    crearCita:PropTypes.func.isRequired
}

export default Formulario;
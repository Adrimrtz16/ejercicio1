import React from "react";

const Subunidad = (props) => {

    return(
         <li><strong>{props.subunidad.name}</strong>.Ejercicios:{props.subunidad.exercises}</li>
    )
}

export default Subunidad;
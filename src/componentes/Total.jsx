import React from "react";

const Total = (props) => {

    const total = props.tema.parts.reduce((total, siguiente) => total + siguiente.exercises, 0)

    return(
        <p>Total de ejercicios en el curso {total}</p>
    )

}

export default Total;
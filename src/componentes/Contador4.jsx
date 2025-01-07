import React, { useEffect, useState } from "react";

const Contador4 = (props) => {

    const [contador, setContador] = useState(+props.contador);

    function incrementar(){
        setContador(contador => contador + 1);
    }

    function iniciarContador(){
        setInterval(incrementar, 1000);
    }

    useEffect(iniciarContador, [])

    return(
        <div>
            <p>Contador</p>
            <h1>{contador}</h1>
        </div>
    )
}

export default Contador4;
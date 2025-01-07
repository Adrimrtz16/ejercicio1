import React from "react";
import { useState } from "react";

const Contador = (props) => {

    //let valorContador = props.contador;
    const [valorContador, setContador] = useState(+props.contador);

    const [clicks, setClicks] = useState([]);

    const contarI = clicks.filter(click => click === 'i').length;
    const contarR = clicks.filter(click => click === 'r').length;

    const parImpar = valorContador % 2 === 0 ? "Par" : "Impar";


    function incrementaContador(){
        //valorContador++;
        setContador(valorContador + 1);
        setClicks([...clicks, 'i'])
    };

    function resetearContador(){
        setContador(+props.contador);
        setClicks([...clicks, 'r'])
    };

    return(
        <div>
            <h1>{valorContador}</h1>
            <button onClick={incrementaContador}>IncrementaContador</button>
            <button onClick={resetearContador}>Resetear</button>
            <p>{clicks}</p>
            <p>clicks {clicks.length}</p>
            <p>Clicks 'i' {contarI}</p>
            <p>Clicks 'r' {contarR}</p>
            <p>es {parImpar}</p>
        </div>
    );

};

export default Contador;
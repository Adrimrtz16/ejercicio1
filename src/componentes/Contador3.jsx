import React from "react";
import { useReducer } from "react";

const Contador3 = (props) => {

    const [estado, setEstado] = useReducer(reducer, {contador: +props.contador, 
                                                    clicks: []});

    
    const contarI = estado.clicks.filter(click => click === 'i').length;
    const contarD = estado.clicks.filter(click => click === 'd').length;
    const contarR = estado.clicks.filter(click => click === 'r').length;

    const parImpar = estado.contador % 2 === 0 ? "Par" : "Impar";

    function reducer(estado, accion){
        switch(accion.type){
            case 'incrementarContador':
                return {contador: estado.contador + 1, 
                        clicks: [...estado.clicks, 'i']};
            case 'decrementarContador':
                return {contador: estado.contador - 1, 
                        clicks: [...estado.clicks, 'd']};
            case 'resetearContador':
                return {contador: +props.contador, 
                        clicks: [...estado.clicks, 'r']};
            default:
                return estado;
        }
    }

    function incrementaContador(){
        setEstado({type: 'incrementarContador'});
    }

    function decrementarContador(){
        setEstado({type: 'decrementarContador'});
    }

    function resetearContador(){
        setEstado({type: 'resetearContador'});
    }

    return(
        <div>
            <h1>{estado.contador}</h1>
            <p>es {parImpar}</p>
            <p>{estado.clicks}</p>
            <p>clicks {estado.clicks.length}</p>
            <button onClick={incrementaContador}>Incrementar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={resetearContador}>Resetear</button>
            <p>Clicks 'i' {contarI}</p>
            <p>Clicks 'i' {contarD}</p>
            <p>Clicks 'r' {contarR}</p>
        </div>
    );
};

export default Contador3;
import React from 'react';
import { useState } from 'react';

const Colores = () => {

    const [rojo, setRojo] = useState(0);
    const [amarillo, setAmarillo] = useState(0);
    const [verde, setVerde] = useState(0);

    const total = rojo + amarillo + verde;

    function contarRojo(){
        setRojo(rojo + 1);
    }

    function contarAmarillo(){
        setAmarillo(amarillo + 1);
    }

    function contarVerde(){
        setVerde(verde + 1);
    }

    return(
        <div>
            <button className='rojo' onClick={contarRojo}>Rojo</button>
            <button className='amarillo' onClick={contarAmarillo}>Amarillo</button>
            <button className='verde' onClick={contarVerde}>Verde</button>
            <p>Veces pulsado rojo: {rojo}</p>
            <p>Veces pulsado amarillo: {amarillo}</p>
            <p>Veces pulsado verde: {verde}</p>
            <p>Total de pulsaciones {total}</p>
            <p>Porcentaje rojo {Math.trunc((rojo/total)*100)}%</p>
            <p>Porcentaje amarillo {Math.trunc((amarillo/total)*100)}%</p>
            <p>Porcentaje verde {Math.trunc((verde/total)*100)}%</p>
        </div>
    )
}

export default Colores;
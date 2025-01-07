import React from 'react';
import { useState } from 'react';

const Colores2 = () => {

    const [colores, setColores] = useState({
        rojo : 0,
        amarillo : 0,
        verde : 0
    });

    const total = colores.rojo + colores.amarillo + colores.verde;


    function contarRojo(){
        setColores({...colores, 
            rojo : colores.rojo + 1});
    }

    function contarAmarillo(){
        setColores({...colores, 
            amarillo : colores.amarillo + 1});
    }

    function contarVerde(){
        setColores({...colores, 
            verde : colores.verde + 1});
    }

    return(
        <div>
            <button className='rojo' onClick={contarRojo}>Rojo</button>
            <button className='amarillo' onClick={contarAmarillo}>Amarillo</button>
            <button className='verde' onClick={contarVerde}>Verde</button>
           
            <p>Veces pulsado rojo: {colores.rojo}</p>
            <p>Veces pulsado amarillo: {colores.amarillo}</p>
            <p>Veces pulsado verde: {colores.verde}</p>
            
            <p>Total de pulsaciones {total}</p>
            <p>Porcentaje rojo {Math.trunc((colores.rojo/total)*100)}%</p>
            <p>Porcentaje amarillo {Math.trunc((colores.amarillo/total)*100)}%</p>
            <p>Porcentaje verde {Math.trunc((colores.verde/total)*100)}%</p>
        </div>
    )
}

export default Colores2;
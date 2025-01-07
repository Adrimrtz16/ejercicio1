import React, { useEffect, useState } from "react";

const Reloj = () => {

    const [segundos, setSegundos] = useState(new Date().getSeconds());
    const [minutos, setMinutos] = useState(new Date().getMinutes());
    const [horas, setHoras] = useState(new Date().getHours());

    const horasConFormato = horas.toString().padStart(2, '0');
    const minutosConFormato = minutos.toString().padStart(2, '0');
    const segundosConFormato = segundos.toString().padStart(2, '0');

    function incrementar() {
        setSegundos((segundos) => {
            if (segundos === 59) {
                setMinutos((minutos) => {
                    if (minutos === 59) {
                        setHoras((horas) => (horas === 23 ? 0 : horas + 1));
                        return 0;
                    }
                    return minutos + 1;
                });
                return 0;
            }
            return segundos + 1;
        });
    }
    
    function iniciarReloj() {
        setInterval(incrementar, 1000);
    } 

    useEffect(iniciarReloj, []);

    return(
        <div>
            <p>Reloj</p>
            <h1>{horasConFormato}:{minutosConFormato}:{segundosConFormato}</h1>
        </div>
    )
}

export default Reloj;
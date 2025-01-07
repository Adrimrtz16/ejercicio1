import React from "react";
import Boton from "./Boton";

const Botonera = (props) => {

    return (
        <div className="buttons" >
            <Boton clase ="fa fa-reply reply-button"></Boton>
            <Boton clase ="fa fa-retweet retweet-button"></Boton>
            <Boton clase ="fa fa-heart like-button"></Boton>
            <Boton clase ="fa fa-ellipsis-h more-options-button"></Boton>
        </div>     
    );
};

export default Botonera;
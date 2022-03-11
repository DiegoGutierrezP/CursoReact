import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

export default function Estilos(){
    let myStyles = {
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    }
    return (
        <section className="estilos">
            <h2>Estilos CSS de React</h2>
            <h3 className="bg-react">Estilos en hoja CSS Externa</h3>
            <h3 className="bg-react" style={{borderRadius:".25rem",margin:"2rem",textTransform:"uppercase"}}>
                Estilos en linea (atributo style)</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en linea</h3>
            <h3 className="bg-react">
                Agreagando Normalize con <br/>
                <code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con Modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con Modulos</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
    );
}
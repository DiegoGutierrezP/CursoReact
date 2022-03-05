import React,{Component} from "react";
import Propiedades from "./Propiedades";

export default class Padre extends Component{
    //propertyInitializaer sin constructor
    state= {
        contador:0,
    };

    incrementarContador = (e)=>{
        this.setState({
            contador : this.state.contador + 1,
        })
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre Componentes </h2>
                <p><b>{this.state.contador}</b></p>
                <Hijo incrementarContador={this.incrementarContador} mensaje="mensaje para el hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador} mensaje="mensaje para el hijo 2"/>
            </>
        );
    }
}

function Hijo(props){
    return(
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador} >+</button>
        </>
    );
}
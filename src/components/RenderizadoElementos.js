import React,{Component} from "react";
import data from "../helpers/data.json";

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons : ["Primavera","Verano","otoño","Invierno"]
        };
    }
    render(){
        //console.log(data);
        return (
            <div>
                <h2>Renderizado de ELementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    { //atributo key necesario para react
                        this.state.seasons.map((el,index) => <li key={index} >{el}</li>)
                    }
                </ol>
                <h3>Frameworks Frontent Javascript</h3>
                <ul>
                    {
                        data.frameworks.map((el) => <ElementoLista key={el.id} el={el}/>)
                    }
                </ul>
            </div>
        );
    }
}
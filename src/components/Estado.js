import React,{Component} from "react";

//COmponente funcional , no puede tener Estado
function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0,
        };
        //no se puede actualziar el estado directamente por eso se usa setState,
        //porque si actualizamos el estado directamente el metodo render se ejecutaria denuevo
        /* setInterval(()=>{
            this.setState({
                contador:this.state.contador + 1,
            })
        },1000) */
    }

    render(){
        return (
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}
import React,{Component} from "react";

//const Componente = (props) => <h2>{props.msg}</h2>;

//componente funcional
function Componente(props){
    return <h2>{props.msg}</h2>
}

//componente clase
/* class Componente extends Component{
    //un componente de clase debe tener una f render.
    render(){
        return <h2>{this.props.msg}</h2>
    }
} */

export default Componente;
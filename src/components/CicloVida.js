import React,{Component} from "react";

class Reloj extends Component{
    constructor(props){
        super(props);
    }

    //Se ejecuta antes de destruir el componente del árbol del DOM, 
    //es un método útil para hacer tareas de limpieza.
    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }

    render(){
        return (
            <h3>{this.props.hora}</h3>
        );
    }
}

export default class CicloVida extends Component{

    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, aun NO esta en el DOM");
        this.state = {
            hora:new Date().toLocaleTimeString(),
            visible:false,
        }

        this.temporizador = null;
    }
    //Se invoca inmediatamente después de que un componente se ha insertado al árbol 
    //del DOMEs útil para ejecutar suscripciones o peticiones asíncronas a API's, 
    //bases de datos, servicios, etc.
    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM");
    }
    //Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede,
    //al igual que componenDidUpdate es un método ideal para hacer peticiones externas.
    componentDidUpdate(prevProps, prevState){
        console.log(2,"El estado o las props del componente han cambiado")
        console.log(prevProps);
        console.log(prevState);//el estado anterior
    }
    

    tictac = ()=>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString(),
            })
        },1000);     
    }

    iniciar = ()=>{
        this.tictac();
        this.setState({
            visible:true,
        })
    }

    detener = ()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible:false,
        })
    }

    render(){
        console.log(4,"El componente se dibuja (o redibuja por algun cambio en el DOM)");
        return (
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {/* <h3>{this.state.hora}</h3> */}
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar} >Iniciar</button>
                <button onClick={this.detener} >Detener</button>
            </>
        );
    }
}
import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };

        //binding
        this.sumar = this.sumar.bind(this);//enlazamos el this de la clase para el metodo sumar porque si en esto el this es undefinined
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log('sumando');
        console.log(this);
        this.setState({
            contador:this.state.contador + 1,//this por binding
        })
    }
    restar(e){
        console.log('restando');
        console.log(this);
        this.setState({
            contador:this.state.contador - 1,
        })
    }

    render(){   
        return(
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <div>
                    <nav>
                        <button  onClick={this.sumar} >+</button>
                        <button onClick={this.restar} >-</button>
                    </nav>
                </div>
                <h3>{this.state.contador}</h3>  
            </div>
        );
    }
}

//Properties Initializer
export class EventosES7 extends Component{
    //evitamos el bindeo
    state={
        contador : 0,
    };
    //Arrow functions
    sumar = (e) => {
        console.log('sumando');
        console.log(this);
        this.setState({
            contador:this.state.contador + 1,//this por binding
        })
    }
    restar=(e)=>{
        console.log('restando');
        console.log(this);
        this.setState({
            contador:this.state.contador - 1,
        })
    }

    render(){   
        return(
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <div>
                    <nav>
                        <button  onClick={this.sumar} >+</button>
                        <button onClick={this.restar} >-</button>
                    </nav>
                </div>
                <h3>{this.state.contador}</h3>  
            </div>
        );
    }
}

/* function Boton(props){
    return (<button onClick={props.myOnClick}>Boton hecho por componente</button>)
} */
/* const Boton= (props)=>(<button onClick={props.myOnClick}>Boton hecho por componente</button>);  */

const Boton= ({myOnClick})=>(<button onClick={myOnClick}>Boton hecho por componente</button>); 

export class MasSobreEventos extends Component{

    handleClick = (e,mensaje)=>{
        console.log(e);//evento sintetico de react
        console.log(e.nativeEvent);//accdemos al evento original nativo (javascript)
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }

    render(){
        return(
            <div>
                <h2>Mas Sobre eventos</h2>
                <button 
                onClick={
                    //pasando parametros a un evento
                    (e) => this.handleClick(e,"Hola pasando parametros desde un evento")
                }>Saludar
                </button>

                {/* Evento Personalizado */}
                {/* <Boton onClick={
                    (e) => this.handleClick(e,"Hola pasando parametros desde un evento")
                    } /> */}
                <Boton 
                myOnClick={
                    (e) => this.handleClick(e,"Hola pasando parametros desde un evento")
                }/>
            </div>
        );
    }
}

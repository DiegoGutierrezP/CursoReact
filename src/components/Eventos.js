import React, {Component} from "react";

export default class Eventos extends Component{
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
            contador:this.state.contador + 1,
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
                <h2>Eventos en componentes de clase</h2>
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
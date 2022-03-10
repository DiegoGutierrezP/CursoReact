import React, { Component } from 'react';
import '../App.css';

function Pokemon (props){
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}


export default class AjaxApis extends Component{

    state = {
        pokemons:[],
    };

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            json.results.forEach(el => {
                fetch(el.url)
                .then(res => res.json())
                .then(json => {
                    //console.log(json);
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default,
                    };

                    let pokemons = [...this.state.pokemons,pokemon] //sprade operator,obten una copia del estado actual y le vas agregar
                    this.setState({
                        pokemons//pokemons:pokemons
                    });
                })
            }); 
        })
    }

    render(){
        return(
            <>
                <h2>Peticiones Asincronas en Componentes de Clase</h2>
                <div className='content-pokes'>
                {
                    this.state.pokemons.length === 0 ?<h3>Cargando..</h3> : 
                    this.state.pokemons.map((el)=><Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
                }
                </div>
            </>
        )
    }
}
import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import './App.css';

//JSX
function App() {
  let nombre = "diego";
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{nombre}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un Componente funcional Expresado desde una prop"/>
          <hr/>
          <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={19} 
          booleano={true} 
          arreglo={[1,2,3,4]}
          objeto = {{nombre:"diego",correo:"diego123@gmail.com"}}
          funcion = {num => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
          />
        </section>
      </header>    
    </div>  
  );
}

export default App;

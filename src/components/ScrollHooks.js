import React, {useState,useEffect} from "react";

export default function ScrollHooks(props){

    const [scrollY,setScrollY] = useState(0);

    useEffect(()=>{
        //console.log("Moviendo el scroll");

        const detectarScroll = ()=> setScrollY(window.pageYOffset);

        window.addEventListener("scroll",detectarScroll);

        //cuando le retornamos una funcion react lo toma como fase de desmontaje
        return ()=> {
            window.removeEventListener("scroll",detectarScroll);
            //console.log("Fase de Desmontaje");
        };
    },[scrollY]);//este efecto solo se va ejecutar cunado la variable scrollY tenga cambios

    useEffect(()=>{
        //console.log("Fase de Montaje");
    },[])//este useeEffect se va ejecutar cuando esta variable cambie,si se manda array vacio solo se ejecuta una vez

    //un useeffect que no tenga definido el segundo parametro(lista de depencias) va ser como un componentDidUpdate
    useEffect(()=>{
        //console.log("Fase de Actualizacion");
    });

    useEffect(()=>{   
        return ()=>{
            //console.log("Fase de Desmontaje");
        };
    })

    return(
        <>
            <h2>Hooks - useEffect y el Ciclo de vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    );
}
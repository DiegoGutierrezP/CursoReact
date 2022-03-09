import React ,{useState,useEffect} from "react";

function Reloj({hora}){
    return <h3>{hora}</h3>
}

export default function RelojHooks(){
    const [hora , setHora] = useState(new Date().toLocaleTimeString());
    const [visible , setVisible] = useState(false);

    useEffect(()=>{
        let temporizador;
        if(visible){
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString())
            },1000)
        }else{
            clearInterval(temporizador); 
        }
        //componentWillUnmount
        return ()=>{
            console.log("Fase de Desmontaje");
            clearInterval(temporizador);
        };
    },[visible]);//se ejecuta cuando la variable visible cambie

    return (
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hora} />}
            <button onClick={()=> setVisible(true)} >Iniciar</button>
            <button onClick={()=> setVisible(false)} >Detener</button>
        </>
    );
}

//COMENTARIO DEL VIDEO 18 (otra solucion)
/* export default function RelojHooks(){
    const [visible,setVisible] = useState(true)

    

    return <>
            <h2>Reloj Hook</h2>
            <button onClick={()=>{setVisible(true)}}>Mostrar</button>
            <button onClick={()=>{setVisible(false)}}>Ocultar</button>
            {visible && <Reloj />}
        </>
}



function Reloj(){
    const [hora,setHora]=useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        console.log("la hora cambio")
    },[hora])

    useEffect(()=>{
    console.log("Componente iniciado")
      const segundero=  setInterval(()=>{
            setHora(new Date().toLocaleTimeString())
        },1000)

        return ()=>{
            console.log("componente morido")
            clearInterval(segundero)
        }
    },[])
    return <><p>{hora}</p></>
} */
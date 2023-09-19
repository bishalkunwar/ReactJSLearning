import { useState } from "react";

export default function Batching(){

    const[number, setNumber]=useState(0);

    function handleClick1(){
        setNumber(number+1)
        setNumber(number+1)
        setNumber(number+1)
    };

    function handleClick2(){
        setNumber(n=>n+1)
        setNumber(n=>n+1)
    };

    function handleClick3(){
        setNumber(10);
    }
    return(
        <>
            <h1>{number}</h1>
            <button onClick={handleClick1}>
                +1
            </button>
            <hr/>

            <button onClick={handleClick2}>
                +2
            </button>

            <hr/>

            <button onClick={handleClick3}>
                +const 1o
            </button>
        </>
    )
}
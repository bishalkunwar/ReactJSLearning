import { useState } from "react";

export default function Form(){

    const[fName, setfName] = useState('');
    const[lName, setlName] = useState('');

    function handleFNameChange(e){
        setfName(e.target.value);
    };

    function handleLNameChange(e){
        setlName(e.target.value);
    };

    function handleReset(){
        setfName('');
        setlName('');
    };

    return(
        <>
            <hr/>
            <br/><br/>
            <form onSubmit={e=>e.preventDefault()}>

                <input placeholder="First Name" value={fName} onChange={handleFNameChange}/>
                <input placeholder="Last Name" value={lName} onChange={handleLNameChange}/>

                <h1>Hii, {fName} {lName}</h1>
                <button onClick={handleReset}>Reset</button>
           
            </form>
        </>
    )
};
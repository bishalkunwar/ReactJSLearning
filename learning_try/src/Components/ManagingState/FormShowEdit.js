import { useState } from "react";

export default function FormShowData(){

    const[fName, setFName] = useState('B');
    const[lName, setLName] = useState('K');
    const[isEditing, setIsEditing] = useState(false);

    return(
        <form onSubmit={e=>{
            e.preventDefault(); setIsEditing(!isEditing)
        }}>

            <label>
                First Name: {''}
                {isEditing ? (
                    <input value={fName} onChange={e=> {setFName(e.target.value)}}/>
                ) : (<i>{fName}</i>)}
            </label><br/>

            <label>
                Last Name: {''}
                {isEditing ? (
                    <input value={lName} onChange={e=>{setLName(e.target.value)}}
                    />) : (<i>{lName}</i>)}
            </label><br/><br/>

            <button type="submit">
                {isEditing ? "Save":"Edit"} Names
            </button>
            <p>Hello {fName} {lName} ...</p>
        </form>
    );
};
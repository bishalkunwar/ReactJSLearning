import { useState } from "react";

let counter = 0;

export default function Todo(){
    const[name, setName] = useState('');
    const[artists, setArtists] = useState('');

    return(
        <>
            <h1>Coder's Lists</h1>

            <input 
                value={name} onChange={e=>setName(e.target.value)}
            />

            <button onClick={()=>setArtists([
                 ...artists, {id: counter++, name: name}
            ])}>
                Add
            </button>

            <ul>
                {artists.map(artist=>(<li key={artist.id}>{artist.name}</li>))}
                
            </ul>
        </>
    )
}
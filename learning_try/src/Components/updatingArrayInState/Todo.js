import { useState } from "react";


let initialArtists = [
    {id: 0, name: "Bishal"},
    {id: 1, name: "Shreejan"},
    {id: 2, name: "Nishant"},
];

let counter = 3;

export default function Todo(){
    const[name, setName] = useState('');
    const[artists, setArtists] = useState(initialArtists);

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
                {/* {artists.map(artist=>(<li key={artist.id}>{artist.name}</li>))} */}
                {artists.map(artist=>(<li>{artist.name}{''} <button onClick={()=>{setArtists(artists.filter(a=> a.id !== artist.id))}}>Delete</button></li>))}
                
            </ul>

        </>
    )
}
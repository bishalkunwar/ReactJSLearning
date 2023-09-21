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

    // Reverse the array method.
    function handleReverse(){
        const nextList = [...artists];
        nextList.reverse();
        setArtists(nextList);
    };

    function handleAscSort(){
        const nextList = [...artists];
        nextList.sort((a, b) => a.name.localeCompare(b.name));
        //nextList.sort((a,b)=> a.name>b.name ? 1 : a.name===b.name ? 0 : -1);
        // console.log(nextList);
        setArtists(nextList);
    }

    function handleDescSort(){
        const nextList = [...artists];
        nextList.sort((a,b)=> b.name.localeCompare(a.name));
        // nextList.sort((a,b)=> a.name< b.name ? 1 : a.name===b.name ? 0 : -1 );
        setArtists(nextList);
    }


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

            <button onClick={handleReverse}>
                Reverse Artist 
            </button>

            <button onClick={handleAscSort}>
                Asc Sort
            </button> 

            
            <button onClick={handleDescSort}>
                Desc Sort
            </button>

            <ul>
                {/* {artists.map(artist=>(<li key={artist.id}>{artist.name}</li>))} */}
                {artists.map(artist=>(<li key={artist.id}>{artist.name}{''} <button onClick={()=>{setArtists(artists.filter(a=> a.id !== artist.id))}}>Delete</button></li>))}
                
            </ul>

        </>
    )
}
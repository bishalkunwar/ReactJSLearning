import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function CheckToogleState(){

    const[fList, setFList] = useState(initialList);
    const[lList, setLList] = useState(initialList);

    function handleToggleFirst(fid, nextSeen){
        setFList(fList.map(first => {
            if(first.id === fid){
                // Create a new object with changes.
                return{...first, seen: nextSeen}
            }else{
                // No Changes
                return first;
            }
        }))
    };

    function handleToggleSecond(sid, nextSeen){
        setLList(lList.map(second=>{
            if(second.id === sid){
                return { ...second, seen: nextSeen}
            }else{
                return second
            }
        }))
    };

    return(
        <>
            <h1>My lists</h1>
            <hr/><br/><br/>
            <h1>My First Lists</h1>
            <ItmesLists
                title={fList} onToggle={handleToggleFirst}
            />

            <h1>My Second Lists</h1>
            <ItmesLists
                title={lList} onToggle={handleToggleSecond}
            />

        </>
    )
}

function ItmesLists({title, onToggle}){
    return(
        <ul>
            {title.map(titlee=>(
                <li key={titlee.id}><label>
                    <input type='checkbox' checked={title.seen} onChange={e=>{onToggle(titlee.id, e.target.checked);}}/>
                    {titlee.title}
                </label></li>
            ))}
        </ul>

    )
};
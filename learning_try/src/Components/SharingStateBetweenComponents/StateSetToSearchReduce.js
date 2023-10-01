import { useState } from "react";
import { filterItems, data } from "./data";

export default function FilterLists(){
    const[query, setQuery] = useState('');
    const result = filterItems(data, query);
    
    function handleChange(e){
        setQuery(e.target.value);
    };
    
    return(
        <>
            <SearchBar query={query} onChange={handleChange}/>

            <br/><hr/><br/>
            <List item={result}/>
        </>
    )
}

function SearchBar({query, onChange}){
    
    return(
        <label>
            search: {' '}
            <input value={query} onChange={onChange}/>
        </label>
    )
}

function List({item}){

    return(
        <table>
            <tbody>
                {item.map(data=>(
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}
import { useState } from "react";

export default function StateSnap(){

    const[msg, setMsg] = useState('Hello');
    const[isSent, setIsSent] = useState(false);
    
    const[walk, setWalk]=useState(true);

    function handleClick(){
        setWalk(!walk);
        alert(walk ? "Stop is next" : "Walk is next");
    };

    if(isSent){
        return <h1>Your msg is on the way</h1>
    }
    return(

        <>
            <form onSubmit={(e)=>{e.preventDefault(); setIsSent(true); SendMsg(msg)}}>

                <textarea  placeholder="Msg" value={msg} onChange={e=>setMsg(e.target.value)}/>

                <button>
                    Send
                </button>
            </form>

            <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>

            <h1 style={{color : walk ? 'darkgreen' : 'darkred'}}>{walk ? "walk" : "stop"}</h1>

        </>

    )

};

function SendMsg({msg}){
    alert(`Sending ${msg}`);
}
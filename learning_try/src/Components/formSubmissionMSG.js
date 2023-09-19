import { useState } from "react";

export default function FormMSG(){

    const[isSent, setIsSent]=useState(false);
    const[msg, setMsg] = useState('');

    if(isSent){
        return <h1>Thank You!</h1>
    }else {

        return(
            <>
                <form onSubmit={e=>{e.preventDefault(); alert(`sending "${msg}"`); setIsSent(true)}}>
                    <textarea placeholder="Message" value={msg} onChange={e=>setMsg(e.target.value)}/>

                    <br/>
                    <button type="submit">Send</button>
                </form>
            </>
        )
    }
};
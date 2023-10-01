import { useState } from "react";

export default function ResetForm(){
    const[showHint, setShowHint] = useState(false);

    if(showHint){
        return(

            <div>
                <p><b>Your Fav City -- Pokhara!</b></p><br/>
                <Form/><br/>
                <button onClick={()=>{setShowHint(false)}}>
                    Hide Hint...???
                </button>
            </div>
        );
    }

    return(
        <div>
            {null}
            <Form/><br/>
                <button onClick={()=>{setShowHint(true)}}>
                    Show Hint ...1
                </button>
                
        </div>
    );
};


function Form(){
    const[form, setForm] = useState('');
    return(
        <textarea 
            value={form} onChange={e=>setForm(e.target.value)}
        />
    );
};
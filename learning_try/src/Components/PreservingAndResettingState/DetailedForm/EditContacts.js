import { useState } from "react";

export default function EditContacts({initialContact, onSave}){
    const[name, setName] = useState(initialContact?.name);
    const[email, setEmail] = useState(initialContact?.email);
    return(
        <section>
            <label>
                Name : {' '}
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </label><br/>
            <label>
                Email : {' '}
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </label><br/>

            <button onClick={()=>{
                const updatedData = {
                    id: initialContact?.id, name:name, email:email
                };
                onSave(updatedData);    
            }}>Save
            </button><br/>

            <button onClick={()=> {setName(initialContact?.name);
                setEmail(initialContact?.email);
                }}>
                Reset
            </button>
        </section>
    );
};
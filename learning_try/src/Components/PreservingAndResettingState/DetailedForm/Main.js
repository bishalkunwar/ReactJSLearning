import { useState } from "react";
import ContactList from "./ContactLists";
import EditContacts from "./EditContacts";

const initialContacts = [
    {id: 1, name: "bishal", email: "bishal@gmail.com"},
    {id: 2, name: "Shreejan", email: "shreejan@gmail.com"},
    {id: 3, name: "nishant", email: "Nishant@gmail.com"},
];

export default function Main(){

    const[contacts, setContacts] = useState(initialContacts);
    const[selectedId, setSelectedId] = useState(1);

    const selectedContact = contacts.find(c=>c.id===selectedId);

    function handleSave(updatedData){
        const nextContacts = contacts.map(c=>{
            if(c.id === updatedData.id){
                return updatedData;
            }else{
                return c;
            }
        });

        setContacts(nextContacts);
    }

    return(
        <div>
            <ContactList contacts={contacts} selectedId={selectedId} onSelect={id=>setSelectedId(id)} />
            <hr/>
            <EditContacts key={selectedId} initialContacts={selectedContact} onSave={handleSave}/>
        </div>
    );
};



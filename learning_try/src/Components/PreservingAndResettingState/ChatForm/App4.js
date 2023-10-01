import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function App4(){
    const[sendTo, setSendTo] = useState(contacts[0]);
    
    return(
        <div>
            <ContactList contacts = {contacts} selectedContact={sendTo} onSelect={contact=>setSendTo(contact)}/>
            <Chat key={sendTo.id} contact={sendTo}/>
        </div>
    );
};

const contacts = [
    {id: 0, name: 'Bishal', email: 'bishal@gmail.com'},
    {id: 1, name: 'Shreejan', email: 'shreejan@gmail.com'},
    {id: 2, name: 'Gourav', email: 'gourav@gmail.com'}
];


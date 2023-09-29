import { useState } from "react";

export default function ContactList({contacts, selectedContact, onSelect}){

    return(
        <section className="contact-list">
            <ul>
                {contacts.map(contact=>
                <li key={contact.id}>
                    <button onClick={()=> {onSelect(contact)}}>{contact.name}</button>
                </li>
                )}
            </ul>

        </section>
    );
};
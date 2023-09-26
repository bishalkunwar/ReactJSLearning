// Reacting to input with state.

// How declarative UI programming differs from imperative UI programming
// How to enumerate the different visual states your component can be in
// How to trigger the changes between the different visual states from code


import { useState } from "react";

export default function Picture(){

    const[isActive, setIsActive] = useState(false);

    let backGround = 'background';
    let picture = 'picture';

    if(isActive){
        picture += ' picture--active'
    }else{
        backGround += ' background--active'
    }

    return(
        <div className={backGround} onClick={()=> setIsActive(false)} >

            <img className={picture}
                onClick={e=>{
                e.stopPropagation();
                setIsActive(true);
                }} 
                src="https://i.imgur.com/5qwVYb1.jpeg" alt="pict"/>
        </div>
    );
};
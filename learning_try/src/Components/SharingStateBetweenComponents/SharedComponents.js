import { useState } from "react";

export default function SharingStates(){

    const[isActive, setIsActive] = useState(0);

    return(
        <>
            <h1>Example to show a component sharing the same state for the component element.</h1>

            <Sharer title="State1" active = {isActive === 0} onShow={()=>setIsActive(0)}>
                Hello this event is calling the section 1 state renderer.
            </Sharer>

            <Sharer title="State2" active={isActive === 1} onShow={()=>setIsActive(1)}>
                Hello this component is calling the section 2 of state renderer.
            </Sharer>
        </>
    );
};

function Sharer({title, active, onShow, children}){
    return(
        <section className="sharer">
            <h3>{title}</h3>
            {active?(<p>{children}</p>):(<button onClick={onShow}>Show</button>)}
        </section>
    );
};
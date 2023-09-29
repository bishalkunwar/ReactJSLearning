import { useState } from "react";

export default function App3(){
    const[showA, setShowA] = useState(true);
    const[showB, setShowB] = useState(true);

    return(
        <div>

            {showA && <Counter/>}
            {showB && <Counter/> }

            <label>
                <input type="checkbox" checked={showA} onChange={e=>{setShowA(e.target.checked)}} />
                Render the 1st Counter
            </label>

            <label>
                <input type="checkbox" checked={showB} onChange={e=>{setShowB(e.target.checked)}}/>
                Render the 2nd Counter
            </label>
        </div>
    );
};

function Counter(){
    const[score, setScore] = useState(0);
    const[hover, setHover] = useState(false);

    let className = "counter";
    if(hover){
        className += "hover"
    }

    return(
        <div className={className} onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}>
            <h1>{score}</h1>
            <button onClick={()=> setScore(score+1)}>Add one</button>
        </div>
    )
}
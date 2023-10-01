import { useState } from "react";

export default function FormReset(){
    const[form, setForm] = useState(false);

    if(form){
        return(
            <div>
                <p><i>Ops, i guess you want to go visit pokhara&&&&&</i></p><br/>
                <button onClick={()=>setForm(false)}><br/>
                    Hide Hint
                </button>
            </div>
        );
    };

    return(
        <div>
            <Form/><br/>
            <button onClick={()=>setForm(true)}>
                Show Hint ...!
            </button>
        </div>
    );
};


function Form(){
    const[data, setData] = useState('');
    return(
        <textarea value={data} onChange={e=>{setData(e.target.value)}} />
    );
};
















































// import { useState } from "react";

// export default function ResetForm(){
//     const[showHint, setShowHint] = useState(false);

//     if(showHint){
//         return(

//             <div>
//                 <p><b>Your Fav City -- Pokhara!</b></p><br/>
//                 <Form/><br/>
//                 <button onClick={()=>{setShowHint(false)}}>
//                     Hide Hint...???
//                 </button>
//             </div>
//         );
//     }

//     return(
//         <div>
//             {null}
//             <Form/><br/>
//                 <button onClick={()=>{setShowHint(true)}}>
//                     Show Hint ...1
//                 </button>
                
//         </div>
//     );
// };


// function Form(){
//     const[form, setForm] = useState('');
//     return(
//         <textarea 
//             value={form} onChange={e=>setForm(e.target.value)}
//         />
//     );
// };
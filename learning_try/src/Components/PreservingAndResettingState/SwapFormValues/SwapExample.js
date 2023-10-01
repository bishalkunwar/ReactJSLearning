import {useState} from 'react';

export default function SwapExample(){
    const[reverse, setReverse]=useState(false);
    
    let checkbox = (
        <label>
            <input type='checkbox' checked={reverse} onChange={e=>setReverse(e.target.checked)}/>
            Reverse Order..?
        </label>
    );

    if(reverse){
        return(
            <>
                <Fields key= "LastName" label="LastName: "/>
                <Fields key="FirstName" label="FirstName: " />
                {checkbox}
            </>
        );
    }else{
    return(
        <>
            <Fields key= "FirstName" label="FirstName: "/>
            <Fields key="LastName" label="LastName: " />
            {checkbox}
        </>
    )};
};

function Fields({label}){
    const[text, setText] = useState('');

    return(
        <form>
            <label> {label}:{''}
                <input type="text" value={text} placeholder={label} onChange={e=>{setText(e.target.value)}}/>
            </label>
        </form>
    );
};
// This is an example of writing pure components in react.

import { GetImageUrl } from "../utils";

export default function Profile({person}){

    return(
        <div>
            <Header person={person} />
            <Avatar person={person}/>
        </div>

    );
};

function Header({person}){
    return <h1>{person.name}</h1>
};

function Avatar({person}){
    return(
        <>
          <img className="avatar"
            src={GetImageUrl(person)} alt={person.name} width={50} height={50}
          /> 
        </>
    );
};
import {useState} from 'react';

export default function ObjectState(){

    const[person, setPerson] = useState({
        name: 'Bishal',
        address: 'Scarborough',
        nobels: {
            nobelName: 'ghanta mugi',
            publishDate: '2023-05-23',
        },
        plus: 10
    })

    function handleNameChange(e){
        setPerson({
            ...person,
            name: e.target.value
        });
    };

    function handleAddressChange(e){
        setPerson({
            ...person, 
            address: e.target.value
        });
    };

    function handleNobelNameChange(e){
        setPerson({
            ...person, 
            nobels: {
                ...person.nobels,
                nobelName: e.target.value
            }
        });
    };

    function handleNobelPublishDateChange(e){
        setPerson({
            ...person,
            nobels:{
                ...person.nobels,
                publishDate: e.target.value
            }
        });
    };

    function handlePlusclick(){
        setPerson({
            ...person,
            plus: person.plus+1,
        });
    };

    return(

        <>

            <label>
                Name: 
                <input value={person.name} onChange={handleNameChange}/>
            </label>

            <label>
                Address:
                <input value={person.address} onChange={handleAddressChange}/> 
            </label>

            <label>
                NobelName: 
                <input value={person.nobels.nobelName} onChange={handleNobelNameChange}/>
            </label>

            <label>
                PublishedDate: 
                <input value={person.nobels.publishDate} onChange={handleNobelPublishDateChange}/>
            </label>

            <p>
                <h1>{person.name} </h1> from {person.address} wrote {person.nobels.nobelName} on date {person.nobels.publishDate}
            </p>

            <br/> 
            <p>plus says check me</p>

            <p>{person.plus}</p>
            <button onClick={handlePlusclick}>
                +1
            </button>

        </>


    )
};
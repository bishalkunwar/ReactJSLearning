import {useState} from 'react';
import { GalleryList } from './data';

export default function Gallery(){

    const[index, setIndex] = useState(0);
    const[showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < GalleryList.length-1;


    
    function handlePreviousClick(){
        if(hasPrev){
            setIndex(index-1);
        }
    };

    function handleNextClick(){
        if(hasNext){
            setIndex(index+1);
        }
    };

    function handleShowMoreClick(){
        setShowMore(!showMore);
    };

    let frame = GalleryList[index];
    return(
        <>

            <button onClick={handlePreviousClick} disabled={!hasPrev}>
                Previous
            </button>
            <button onClick={handleNextClick} disabled={!hasNext}>
                Next
            </button> 

            <h2>
                <i><b>{frame.name}</b></i> by {frame.artist}
            </h2>
            <h3>({index+1} of {GalleryList.length})</h3>

            <img src={frame.url} alt={frame.alt}/>

            {showMore && <p>{frame.description}</p>}
            <button onClick={handleShowMoreClick}>
                {showMore ? 'Hide' : 'Show'} Details
            </button>
        </>

    )
};
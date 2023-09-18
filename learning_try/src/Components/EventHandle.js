// function AlertButton({message, children}){
//     return(
//         <button onClick={()=>alert(message)}>
//             {children}
//         </button>
//     )
// }

// export default function EventHandler(){

//     return(
//         <div className="events">
//             <AlertButton message="Let's see movie" >
//                 Movie
//             </AlertButton>

//             <AlertButton message="Let's Upload an Image">
//                 Image
//             </AlertButton>
//         </div>

//     );
// };



// // Event Handlers as Props:-
// function Button({onClick, children}){

//     return(
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// };


// function PlayButton({movieName}){
//     function handlePlayClick(){
//         alert(`Playing ${movieName}`)
//     } 
//     return(
//         <Button onClick={handlePlayClick}>
//             play="{movieName}"
//         </Button>
//     );
// };

// function UploadMovie({movie}){
//     return(
//         <Button onClick={()=>alert(`uploading ${movie}`)}>
//             Upload movie
//         </Button>
//     );
// };


// export default function Main(){
//     return(
//         <div>
//             <UploadMovie movie = "Munni Badnam Hui"/>
//             <PlayButton movieName = "Silaa ki jawani"/>
//         </div>
//     );
// };



// A better way to practice event handler props for app-specific concepts.

export default function EventHandle(){
    return(
    <Toolbar 
        onPlayMovie = {()=>alert("Playing Movie")}
        onUploadMovie = {()=>alert("Uploading Movie")}

    />
    );
};

function Toolbar({onPlayMovie, onUploadMovie}){
    return(
        <div>
            <Button onClick={onPlayMovie}>
                Plays
            </Button>

            <Button onClick={onUploadMovie}>
                Uploads
            </Button>  
        </div>
    );
}

function Button({onClick, message}){
    return(
        <button onClick={onClick}>
            {message}
        </button>
    );
};
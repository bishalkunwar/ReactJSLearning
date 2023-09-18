// Note: writing markup with JSX && JSX with curly braces.

const baseUrl = "https://i.imgur.com/";
const linkDetails = {
    name: "Bishal",
    linkId: "7vQD0fP",
    linkSize: "s",

    theme: {
        color:"pink",
    }
}

// In the above base url and linke details , despite all these the main baseUrl ="aadv/id/s.jpg" will be best easy.

const Home = () => {

    return(
        <section className="home">
            <div className="link" style={{...linkDetails.theme, fontSize:12}}>
                <h3 style={{}}>{linkDetails.name}</h3>
                <a href="/">"{baseUrl}{linkDetails.linkId}{linkDetails.size}.jpg"</a>
            </div>

            <div className="home">
                <h1>This is the message from boss, learn this else you will get fucked up!!</h1>
                <p>hello this is me bishal the fucking guy!!!</p>
            </div>
        </section>

    );
};


export default Home;
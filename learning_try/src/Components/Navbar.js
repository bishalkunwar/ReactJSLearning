const Navbar = () => {
    
    const msg = "Welcome to my web";

    return(
        <nav className="navbar">
            <h1>{msg}</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create ">My Blog</a>
            </div>
        </nav>
    );
};


export default Navbar;
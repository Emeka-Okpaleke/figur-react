import figur from "../assets/image/Group 1622.png"
const Navbar = () => {
    return (
        <div className="nav-bar-container">
            <div className="container">
                <nav className="nav-bar">
                    <div className="links">
                        <img src={figur} alt="" />
                        <div className="navigation">
                            <a href="/">Individual</a>
                            <a href="/">Business</a>
                            <a href="/">Blog</a>
                        </div>
                    </div>
                    <div className="nav-buttons">
                        <button>Login</button>
                        <button className="signUp">Sign Up</button>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Navbar;

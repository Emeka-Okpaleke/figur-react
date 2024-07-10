import React, { useState } from "react";
import figur from "../assets/image/Group 1622.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav-bar-container container">
            {/* <div className="container"> */}
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
                    <div className="hamburger" onClick={toggleMenu}>
                        <a href="#"><i className="fa-solid fa-bars"></i></a>
                    </div>
                </nav>
            {/* </div> */}
            {isMenuOpen && (
                <div className="mobile-hamburger-container">
                    <div className="mobile-phone-nav">
                        <ul>
                            <li><a href="/">Individual</a></li>
                            <li><a href="/">Business</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                        <div className="registration-buttons">
                            <ul style={{ display: "flex" }}>
                                <a href="#">
                                    <li style={{
                                        borderRadius: "20px",
                                        backgroundColor: "#2260FF",
                                        padding: "9px 30px",
                                        color: "white",
                                        alignSelf: "center",
                                        opacity: 1
                                    }}>
                                        Login
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="sign-up" style={{
                                        borderRadius: "20px",
                                        backgroundColor: "#032B69",
                                        padding: "9px 30px",
                                        color: "white",
                                        alignSelf: "center",
                                        opacity: 1
                                    }}>
                                        Sign Up
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

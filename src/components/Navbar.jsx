import React  from "react";
import "./Navbar.css";

const Navbar = () => {
    
    return (
        <div className="navbar">
            <div className="logo">
            <p className="logo"><h2>THEONE</h2></p>
            </div>
            <ul className="nav-menu">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/">How A Works</a></li>
                <li className="nav-item"><a href="/">Privacy</a></li>
                <li className="nav-item"><a href="/">Team</a></li>
                <li className="nav-item"><a href="/">Features</a></li>
            </ul>
        </div>
    )
}
export default Navbar;

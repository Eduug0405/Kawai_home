import React from "react";
import '/Styles/StylesHeader.css';

const Header = () =>{
    return(
        <nav className="navbar">
            <div className="titulo">
                <img src="/assets/panda_kawaii_home-removebg-preview%20(1)%20(1).png" alt="" className="logo"/>
            </div>

            <ul className="list">
                <li>KAWAII HOME</li>
            </ul>
        </nav>
    )
}

export default Header;
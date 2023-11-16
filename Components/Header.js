import React from "react";
import '/Styles/StylesHeader.css';

const Header = () =>{
    return(
        <nav className="navbar">
            <div className="titulo">
                <img src="/panda.jpg" alt="" className="logo"/>
            </div>

            <ul className="list">
                <li>KAWAII HOME</li>
            </ul>
        </nav>
    )
}

export default Header;
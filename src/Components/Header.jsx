import { NavLink } from "react-router-dom"
import "./Css/header.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
    const [isMenu,setIsMenu] = useState(false)

    const hendleMenuBtn = () => {
        setIsMenu(!isMenu);
    }

    const showAlwaysMenu = () => {
        setIsMenu(false);
    }
    return (
        <header>
            <div className="container">
                <div className="grid-template">
                    <div className="Logo">
                        <NavLink to="/" onClick={showAlwaysMenu}>WorldTour</NavLink>
                    </div>
                    <nav>
                        <ul className={`${isMenu ? "menu" : "simple"}`}>
                            <li>
                                <NavLink to="/" onClick = {showAlwaysMenu}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick = {showAlwaysMenu}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick = {showAlwaysMenu}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/country" onClick = {showAlwaysMenu}>Country</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button className="ham-menu" onClick={hendleMenuBtn}>
                        <GiHamburgerMenu className="ham-icon"/>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header

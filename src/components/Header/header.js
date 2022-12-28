import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <img src="./../../../public/LOGO.svg" alt="logo kasa"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header
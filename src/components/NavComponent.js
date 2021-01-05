import React from "react";
import { Link } from "gatsby";
import "../styles/components/nav/nav.css"

export default function Nav(props){


    function openMenu() {
        const navLinks = document.querySelector(".nav-links-mobile");
        const hamburger = document.querySelector(".hamburger");

        navLinks.classList.toggle("open");
        hamburger.classList.toggle("open");
    }

    return(
            <div>        
                <nav id="nav">

                    {/* Desktop Menu */}

                        <div className="nav-links-container">
                            <Link className="nav-link" to="/"><img className="nav-link-image" src="../img/nav-icons/home.svg" alt=""/><div className="nav-link-text">Home</div></Link>
                            <Link className="nav-link" to="/about/"><img className="nav-link-image" src="../img/nav-icons/about.svg" alt=""/><div className="nav-link-text active">About</div></Link>
                            <Link className="nav-link" to="/skills/"><img className="nav-link-image" src="../img/nav-icons/skills.svg" alt=""/><div className="nav-link-text">Skills</div></Link>
                            <Link className="nav-link" to="/portfolio/"><img className="nav-link-image" src="../img/nav-icons/portfolio.svg" alt=""/><div className="nav-link-text">Portfolio</div></Link>
                            <Link className="nav-link" to="/contact/"><img className="nav-link-image" src="../img/nav-icons/contact.svg" alt=""/><div className="nav-link-text">Contact</div></Link>
                        </div>

                    {/* Mobile Menu */}

                    <div className="mobile-menu">                
                        <div onClick={openMenu} className="hamburger">
                            <div className="hamburger-line"></div>
                        </div>

                        <div className="nav-links-mobile">
                            <Link className="nav-link" to="/"><img className="nav-link-image" src="../img/nav-icons/home.svg" alt=""/><div className="nav-link-text">Home</div></Link>
                            <Link className="nav-link" to="/about/"><img className="nav-link-image" src="../img/nav-icons/about.svg" alt=""/><div className="nav-link-text">About</div></Link>
                            <Link className="nav-link" to="/skills/"><img className="nav-link-image" src="../img/nav-icons/skills.svg" alt=""/><div className="nav-link-text">Skills</div></Link>
                            <Link className="nav-link" to="/portfolio/"><img className="nav-link-image" src="../img/nav-icons/portfolio.svg" alt=""/><div className="nav-link-text">Portfolio</div></Link>
                            <Link className="nav-link" to="/contact/"><img className="nav-link-image" src="../img/nav-icons/contact.svg" alt=""/><div className="nav-link-text">Contact</div></Link>
                        </div>
                    </div>
                </nav>
            </div>
    )
}
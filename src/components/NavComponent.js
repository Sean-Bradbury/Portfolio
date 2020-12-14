import React from "react";
import Slide from "react-reveal/Slide";
import { Link } from "gatsby";
import "../styles/components/nav/nav.css"

export default function Nav(props){

    function menuClick() {
        const navLinks = document.querySelector(".nav-links-container");
        const hamburger = document.querySelector(".hamburger-container");
        
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    }

    return(
        <Slide left delay={700}>
            <div>        
                <nav id="nav">
                    <div className="hamburger-container">
                        <div onClick={menuClick} className="hamburger">                        
                            <div className="hamburger-line"></div>
                        </div>
                    </div>
                    <div className="nav-links-container">
                        <Link className="nav-link" to="/"><img className="nav-link-image" src="../img/nav-icons/home.svg" alt=""/><div className="nav-link-text">Home</div></Link>
                        <Link className="nav-link" to="/about/"><img className="nav-link-image" src="../img/nav-icons/about.svg" alt=""/><div className="nav-link-text">About</div></Link>
                        <Link className="nav-link" to="/skills/"><img className="nav-link-image" src="../img/nav-icons/skills.svg" alt=""/><div className="nav-link-text">Skills</div></Link>
                        <Link className="nav-link" to="/portfolio/"><img className="nav-link-image" src="../img/nav-icons/portfolio.svg" alt=""/><div className="nav-link-text">Portfolio</div></Link>
                        <Link className="nav-link" to="/contact/"><img className="nav-link-image" src="../img/nav-icons/contact.svg" alt=""/><div className="nav-link-text">Contact</div></Link>
                    </div>
                </nav>
            </div>
        </Slide>
    )
}
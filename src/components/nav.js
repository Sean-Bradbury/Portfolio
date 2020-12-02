import React from "react";

export default function Nav(){
    return(
        <nav id="nav">
            <div className="nav-links-container">
                <ul className="nav-links">
                    <li className="nav-link"><img className="nav-icon" src={"../../img/nav-icons/home.svg"} alt="Sean Bradbury" srcset="../../img/nav-icons/home.svg"/></li>    
                    <li className="nav-link"><img className="nav-icon" src={"../../img/nav-icons/about.svg"} alt="Sean Bradbury" srcset="../../img/nav-icons/about.svg"/></li>    
                    <li className="nav-link"><img className="nav-icon" src={"../../img/nav-icons/skills.svg"} alt="Sean Bradbury" srcset="../../img/nav-icons/skills.svg"/></li>    
                    <li className="nav-link"><img className="nav-icon" src={"../../img/nav-icons/portfolio.svg"} alt="Sean Bradbury" srcset="../../img/nav-icons/portfolio.svg"/></li>    
                    <li className="nav-link"><img className="nav-icon" src={"../../img/nav-icons/contact.svg"} alt="Sean Bradbury" srcset="../../img/nav-icons/contact.svg"/></li>    
                </ul>
            </div>
        </nav>
    )
}
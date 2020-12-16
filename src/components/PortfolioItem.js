import React from "react";
import "../styles/components/portfolio/portfolio.css";

export default function Portfolio(props) {
    return (
        <div className="portfolio-item">
            <img className="portfolio-img" src={props.image} alt=""/>
            <div className="portfolio-item-content">            
                <h3 className="portfolio-title">{props.title}</h3>
                <p className="portfolio-tech">{props.tech}</p>
                <div className="buttons">                
                    <button className="btn-portfolio"><a href={props.viewSiteLink}>View Site</a></button>
                    <button className="btn-portfolio ml-1"><a href={props.viewSiteCode}>View Code</a></button>
                </div>
            </div>
        </div>
    )
}
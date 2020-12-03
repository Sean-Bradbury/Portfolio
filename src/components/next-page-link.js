import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import Styles from "../styles/components/next-page-link/next-page-link.css"

export default function NextPageLink(props){
    return (
        <div className="next-page-link"><Link className="next-page-link-text" to={props.linkLocation}>{props.linkText}</Link> <Link className="next-page-link-text" to={props.linkLocation}><img className="next-page-link-arrow" src={"../../img/nav-icons/Arrow.png"} alt="Arrow" srcset="../../img/nav-icons/Arrow.png"/></Link></div>
    );
}
import React from "react";
import { Link } from "gatsby";
import "../styles/components/next-page-link/next-page-link.css"
import { FaAngleDown } from "react-icons/fa";

export default function NextPageLink(props){
    return (
        <div className="next-page-link"><Link className="next-page-link-text" to={props.linkLocation}>{props.linkText}</Link> <Link className="next-page-link-text" to={props.linkLocation}><div className="next-page-link-arrow"><FaAngleDown size={24}/></div></Link></div>
    );
}
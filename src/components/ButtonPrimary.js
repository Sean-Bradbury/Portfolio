import React from "react";
import { Link } from "gatsby";

export default function ButtonPrimary(props){
    return (
        <button className="btn-primary" type="button" aria-label="save"><Link to={props.link}><div className="btn-text">{props.text}</div></Link></button>
    );
}
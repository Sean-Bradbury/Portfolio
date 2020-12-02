import React from "react";

export default function ButtonPrimary(props){
    return (
        <button className="btn-primary"><div className="btn-text">{props.text}</div></button>
    );
}
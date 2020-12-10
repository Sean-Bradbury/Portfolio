import React from "react";
import Styles from "../styles/styles.css"

export default function TimelineSection(props) {
    return (
        <div className="timeline-section">
            <div className="timeline-date">
            <div className="timeline-date-from">{props.dateFrom}</div>
            <div className="timeline-date-to">{props.dateTo}</div>
            </div>
            <div className="timeline-content">
            <p className="timeline-content-text">{props.contentText}</p>
            </div>
        </div>
    )
}

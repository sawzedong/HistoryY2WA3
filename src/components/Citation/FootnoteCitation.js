import React from "react";

export default function FootnoteCitation(props) {
    return (
        <div id={`citationNo${props.ID}`} className="footnoteCitation">
            <sup>[{props.ID}]</sup>{" "}<span>{props.children}</span>
        </div>
    )
}
import React from "react";
import "./style.css"
function Note(props) {
    function handleClick() {
        // Call the onDelete function with the note's id
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;
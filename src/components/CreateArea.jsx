import React, { useState } from "react";

function CreateArea(props) {
    const [notes, setNotes] = useState({
        title: "",
        content: "",
    });
    function handler(event) {
        let { name, value } = event.target;
        setNotes((prevNotes) => {
            return {
                ...prevNotes,
                [name]: value,
            };
        });
    }
    function submitNotes(event) {
        props.onAdd(notes);
        setNotes({
            title: " ",
            content: "",
        });
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handler}
                    value={notes.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handler}
                    value={notes.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNotes}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    function addItem(InputText) {
        setNotes((prevNotes) => {
            return [...prevNotes, InputText];
        });
    }
    function deleteNotes(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((_, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addItem} />
            {notes.map((notesItem, index) => (
                <Note
                    key={index}
                    id={index}
                    title={notesItem.title}
                    content={notesItem.content}
                    onDelete={deleteNotes}
                />
            ))}

            <Footer />
        </div>
    );
}

export default App;
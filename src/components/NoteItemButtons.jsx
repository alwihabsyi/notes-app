// eslint-disable-next-line no-unused-vars
import React from "react";

function NoteItemButtons({id, onDelete}) {
    return (
        <div className="note-item__buttons">
            <button className="note-item__delete" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default NoteItemButtons;
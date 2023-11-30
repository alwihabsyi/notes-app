/* eslint-disable no-unused-vars */
import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import NoteItemBody from "./NoteItemBody";
import NoteItemButtons from "./NoteItemButtons";

function NoteItem({id, title, date, body, onDelete}) {
    return (
        <div className="note-item">
            <NoteItemHeader title={title} date={date}/>
            <NoteItemBody body={body} />
            <NoteItemButtons id={id} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem;
// eslint-disable-next-line no-unused-vars
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}) {
    if (notes.length == 0) {
        return (
            <div className="note-list">
            <h2 className="note-input__title">Notes</h2>
            <div className="note-list__empty">
            <h3 className="note-list__empty-message">Tidak ada catatan</h3>
            </div>
            </div>
        )
    }
    return (
        <div className="note-list">
        <h2 className="note-input__title">Notes</h2>
        <div className="note-list__body">

            {
                notes.map((note) => (
                    <NoteItem 
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    date={note.createdAt}
                    body={note.body}
                    onDelete={onDelete}
                    {...note} />
                ))
            }
        </div>
        </div>
    )
}

export default NoteList;
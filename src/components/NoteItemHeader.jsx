// eslint-disable-next-line no-unused-vars
import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemHeader({title, date}) {
    return (
        <div className="note-item__header">
            <h3>{title}</h3>
            <h4>{showFormattedDate(date)}</h4>
        </div>
    )
}

export default NoteItemHeader;
import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete }) => {
    return (
        <>
            { notes.length !== 0 ?
                <div className="notes-list">
                {
                    notes.map(note => (
                        <NoteItem key={note.id} note={note} onDelete={onDelete} {...note}/>
                    ))
                }
                </div> :
                <p className="notes-list__empty-message">No notes here.</p>
            }
        </>
    )
}

export default NoteList;
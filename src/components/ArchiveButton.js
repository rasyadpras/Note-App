import React from "react";

function ArchiveButton ({ archived, id, onArchive }) {

    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}> {archived === true ? 'Unarchive' : 'Archive'} </button>
    )
}

export default ArchiveButton;
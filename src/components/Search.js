import React from "react";

const Search = ({ onSearch }) => {

    const onSearchChange = (event) => {
        onSearch(event.target.value);
    } 

    return (
        <div className="note-search">
            <input type="text" placeholder="Search notes" onChange={onSearchChange} />
        </div>
    )
}

export default Search;
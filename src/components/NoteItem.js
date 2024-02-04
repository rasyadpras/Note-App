import React from 'react';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteButton';
 
function NoteItem ({ title, body, createdAt, id, onDelete }) {
 return (
   <div className="note-item">
     <div className='note-item__content'>
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date" >{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
     </div>
     <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
     </div>
   </div>
 );
}
 
export default NoteItem;
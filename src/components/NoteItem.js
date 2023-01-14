import React from 'react';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
 
function NoteItem ({ title, body, createdAt, id, onDelete, onArchive }) {
 return (
   <div className="note-item">
     <div className='note-item__content'>
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date" >{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
     </div>
     <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} />
     </div>
   </div>
 );
}
 
export default NoteItem;
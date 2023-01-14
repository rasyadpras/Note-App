import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import Header from './Header';
import { getInitialData } from '../utils';
 
class NoteApp extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     notes: getInitialData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
   this.onArchiveHandler = this.onArchiveHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }
 
 onAddNoteHandler({ title, body }) {
   this.setState((prevState) => {
     return {
       notes: [
         ...prevState.notes,
         {
           id: +new Date(),
           title,
           body,
           archived: false,
           createAt: new Date(),
         }
       ]
     }
   });
 }

 onArchiveHandler(id) {
  const noteToModify = this.state.unfilteredNotes.filter(note => note.id === id)[0];
  const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
  this.setState((prevState) => {
    return {
      notes: [
        ...prevState.notes.filter(note => note.id !== id),
        modifiedNote
        ]
      }
  });
 }
 
 render() {
   return (
     <div className="note-app">
       <Header />
       <NoteInput addNote={this.onAddNoteHandler}/>
       <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
     </div>
   );
 }
}
 
export default NoteApp;
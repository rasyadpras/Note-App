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
     unfilteredNotes: getInitialData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
   this.onSearchHandler = this.onSearchHandler.bind(this);
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
           createdAt: new Date(),
         }
       ]
     }
   });
 }

 onSearchHandler(event) {
  if (event.length !== 0 && event.trim() !== '') {
      this.setState({
          notes: this.state.unfilteredNotes.filter(note => note.title.toLowerCase().includes(event.toLowerCase())),
      })
  } else {
      this.setState({
          notes: this.state.unfilteredNotes,
      })
  }
 }
 
 render() {
   return (
     <div className="note-app">
       <Header onSearch={this.onSearchHandler}/>
       <div className='note-app__body'>
        <NoteInput addNote={this.onAddNoteHandler}/>
        <h2>Active Notes</h2>
        <NoteList notes={this.state.notes.filter(note => note.archived === false)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
       </div>
     </div>
   );
 }
}
 
export default NoteApp;
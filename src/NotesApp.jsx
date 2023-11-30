import React from "react";
import { getInitialData } from './utils/index';
import Header from './components/Header';
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            query: ''
        }

        this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    }

    onQueryChangeHandler(query) {
        this.setState(() => {
            return {
                query: query
            }
        })
    }

    onAddNoteHandler({title, note}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: note,
                        archived: false,
                        createdAt: +new Date()
                    }   
                ]
            }
        })
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id != id)
        this.setState({notes})
    }

    render() {
        const filteredNote = this.state.notes?.filter((note) => note.title.toLowerCase().includes(this.state.query.toLowerCase()))
        return(
            <div className="notes-app">
                <Header onQueryChange={this.onQueryChangeHandler}/>
                <div className="notes-app__body">
                <NoteInput addNote={this.onAddNoteHandler}/>
                <NoteList notes={filteredNote} onDelete={this.onDeleteNoteHandler}/>
                </div>
            </div>
        )
    }
}

export default NotesApp;
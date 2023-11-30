import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            maxLength: 50,
            count: 50,
            note: ''
        }

        this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this)
        this.onNoteChangeHandler = this.onNoteChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onQueryChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
                count: this.state.maxLength - event.target.value.length
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    onNoteChangeHandler(event) {
        this.setState(() => {
            return {
                note: event.target.value
            }
        })
    }

    render() {
        return (
            <div className="note-input">
                <h2 className="note-input__title">Jot down some note</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <p className="counter">Words left: {this.state.count}</p>
                    <input className="input-bar" type="text" id="title" name="title"
                     placeholder="Note title" maxLength={this.state.maxLength}
                     value={this.state.title} onChange={this.onQueryChangeHandler} required/>
                     <textarea className="input-bar textarea" value={this.state.note} type="text"
                     id="note" name="note" onChange={this.onNoteChangeHandler} placeholder="Write your note here.." required/>
                    <button className="btn-note" type="submit">Save Note</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;
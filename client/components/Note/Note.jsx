import React from 'react';

import './Note.scss';


class Note extends React.Component {

    handlerDeleteNote = (e) => {
        const { deleteNote, note } = this.props;

        deleteNote && note ? deleteNote(note.id) : null;
    }

    render (){
        const { note, deleteNote } = this.props;

        const style = {
            backgroundColor: note.color
        }

        return (
            note ? <div className="note" style={style} >
                        <span className="note__del-icon" onClick={this.handlerDeleteNote} >x</span>

                        <div className="note__title">
                            { note.title }
                        </div>

                        <div className="note__text">
                            { note.text }
                        </div>
                    </div>
                    :
                    null
        )
    }
}

export default Note;
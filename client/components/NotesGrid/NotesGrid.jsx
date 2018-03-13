import React from 'react';

import Note from '../Note'

import './NotesGrid.scss'


class NotesGrid extends React.Component {
    render (){
        const { notes, deleteNote } = this.props;
        return (
            <div className="note-grid">
                {
                    notes && notes.map((note, index) => <Note key={index} note={note} deleteNote={deleteNote} />)
                }
            </div>
        )
    }
}

export default NotesGrid;
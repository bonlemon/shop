import React from 'react';
import { connect } from 'react-redux';

import NotesGrid from './../components/NotesGrid';

import { deleteNote, loadNotes } from '../actions';

import { getNotes } from '../reducers';



class ContainerNoteGrid extends React.Component {

    componentWillMount(){
        const { onLoadNote, notes } = this.props;

        !notes && onLoadNote() 
    }

    handleDeleteNote = (note) => {
        console.log('note0,', note)
        this.props.onDeleteNote(note);
    }

    render (){
        const { notes } = this.props;

        return notes ? 
                <NotesGrid
                    notes={notes}
                    deleteNote={this.handleDeleteNote}
                />
                : null
    }   
}

const mapStateToProps = (state) => {
    return {
        notes: getNotes(state)
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        onDeleteNote: (note) => {
            return dispatch(deleteNote(note))
        },
        onLoadNote: () => {
            return dispatch(loadNote())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(ContainerNoteGrid);
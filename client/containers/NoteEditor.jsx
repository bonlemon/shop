import React from 'react';
import { connect } from 'react-redux';

import NoteEditor from './../components/NoteEditor';

import {
    createNote,
    loadNotes
} from '../actions';

import {
    getNotes
} from '../reducers';



class ContainerNoteEditor extends React.Component {

    componentWillMount(){
        this.props.onLoadNotes();
    }

    handleCreateNote = (note) => {
        const { onCreateNote, onLoadNotes } = this.props;

        onCreateNote(note);
    }

    render (){
        return <NoteEditor 
            notes={this.props.notes}
            onAddNote={this.handleCreateNote.bind(this)}
        />
    }   
}

const mapStateToProps = (state) => {
    return {
        notes: getNotes(state)
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        onCreateNote: (note) => {
            return dispatch(createNote(note))
        },
        onLoadNotes: () => {
            return dispatch(loadNotes())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToPros)(ContainerNoteEditor);
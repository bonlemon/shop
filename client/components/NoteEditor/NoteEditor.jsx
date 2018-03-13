import React from 'react';

import ColorPicker from '../ColorPicker';

import './NoteEditor.scss';



class NoteEditor extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF',
        };
    };

    handlerTextChange = (event) => {
        return this.setState({
            text: event.target.value
        })
    }

    handlerTitleChange = (event) => {
        return this.setState({
            title: event.target.value
        })
    };

    handlerColorChange = (color) => {

        console.log('color', color)
        return this.setState({
            color
        })
    }

    handlerNoteAdd = () => {
        const {title, text, color} = this.state;
        const newNote = {
            title: title,
            text: text,
            color: color
        }

        Promise.resolve()
            .then(() => {
                return this.setState({
                    title: '',
                    text: '',
                    color: '#FFFFFF',
                })
            })
            .then(() => {
                this.props.onAddNote(newNote);
            })
    }

    render (){
        return (
            <div className="note-editor">
                <input
                    type="text"
                    className="note-editor__title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handlerTitleChange}
                />

                <textarea
                    placeholder="Enter text"
                    rows={5}
                    className="note-editor__text"
                    value={this.state.text}
                    onChange={this.handlerTextChange}
                />
                <div className="note-editor__footer">
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handlerColorChange}
                    />
                    <button
                        className="note-editor__button"
                        disabled={!this.state.text}
                        onClick={this.handlerNoteAdd}
                    >
                        Add
                    </button>
                </div>


            </div>
        )
    }
}

export default NoteEditor;
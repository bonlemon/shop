import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/* Описываем схему
    в которой поля - это поля в документе
    */
const NoteSchema = new Schema({
    title : {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    createAt: {
        type: Date
    }
});

// Create model

const Note = mongoose.model('Note', NoteSchema);

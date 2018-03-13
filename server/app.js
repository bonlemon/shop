import express      from 'express';
import bodyParser   from 'body-parser';
import cors         from 'cors';

import { serverPort } from './../etc/config.json';

import * as db from './utils/DataBaseUtis';

db.setUpConnection();

const app = express();

// Middleware for parsing requests 
// and transform from json
app.use(bodyParser.json());

// it needs for cors
app.use(cors({origin: '*'}));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });

app.get('/notes', (req, res) => {
    db.listNotes().then(data => {
        res.send(data);
    })
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id)
        .then(() =>{
            res.send({id: req.params.id})
        })
        .catch((err)=>{
            console.log(err)
        })
});


const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port: ${serverPort}`)
})
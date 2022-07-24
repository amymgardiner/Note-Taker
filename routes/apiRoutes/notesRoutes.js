const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db');
const { createNewNote, findById, editNote, removeNote } = require('../../lib/notes');

// read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.json(notes);
});

// receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
router.post('/notes', (req, res) => {

    // creates new note if id exists, otherwise edits existing note
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});

// receive a query parameter containing the id of a note to delete
// read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    removeNote(note, notes);
    res.json();
});

module.exports = router;
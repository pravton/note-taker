const router = require('express').Router();
const db = require('../../db/db.json');
const {createNewNote, deleteNotes} = require('../../lib/notes');

// Get route for notes end point
router.get('/notes', (req, res) => {
  let results = db;
  // check and return the notes
  if(results) {
    res.json(results);
  } else {
    res.send(404);
  }
});

// Post route for notes end point
router.post('/notes',(req, res) => {
  if(req.body) {
    // check the last object's id if nothing exist let it be 0
    let lastId = db.length !== 0 ? db[db.length-1].id : 0;
    //Apply the id into the object
    req.body.id = lastId + 1 ;

    //create the new note and save in the db 
    const note = createNewNote(req.body, db);
    // response back to the server
    res.json(note);
  }
});

// Delete a note by specific id
router.delete('/notes/:id',(req, res) => {
  // Get the id that wanted to delete
  const id = req.params.id;
  // delete the note and save the new array in the db
  const notes = deleteNotes(id, db);
  // response back to the server
  res.json(notes);
});

// Export router
module.exports = router;
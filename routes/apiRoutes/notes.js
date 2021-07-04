const router = require('express').Router();
const db = require('../../db/db.json');
const {createNewNote, deleteNotes} = require('../../lib/notes');

// Get route for notes end point
router.get('/notes', (req, res) => {
  let results = db;

  if(results) {
    res.json(results);
  } else {
    res.send(404);
  }
});

// Post route for notes end point
router.post('/notes',(req, res) => {
  if(req.body) {
    // check the last object's id
    
    let lastId = db.length !== 0 ? db[db.length-1].id : 0;
    //Apply the id into the object
    req.body.id = lastId + 1 ;

    const note = createNewNote(req.body, db);
    res.json(note);
  }
});

// Delete a note by specific id
router.delete('/notes/:id',(req, res) => {
  const id = req.params.id;

  console.log(`The note id ${id} has been deleted!`);

  const notes = deleteNotes(id, db);
  
  res.json(notes);
});

// Export router
module.exports = router;
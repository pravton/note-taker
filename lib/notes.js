const { query } = require('express');
const fs = require('fs');
const path = require('path');



// Function to regenerate the notes data with the input
function createNewNote(body, notes) {

  // save the new object into the data.
  const note = body;

  notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  )
  return note;
}

function deleteNotes(id, notes) {
  let deleteIndex;
  notes.findIndex((el, index) => {
    if(el.id === parseInt(id)) {
      deleteIndex = index;
    } 
  });

  if(deleteIndex) {
      notes.splice(deleteIndex, 1);
  }

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  )

}

module.exports = {createNewNote, deleteNotes};
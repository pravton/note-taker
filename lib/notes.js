const fs = require('fs');
const path = require('path');

// Function to regenerate the notes data with the input
function createNewNote(body, notes) {
  // save the new object into the data.
  const note = body;
  // push the note to the array
  notes.push(note);

  // write the db file again with updated content
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  )
  return note;
}

// Function to delete the chosen object from the notes array
function deleteNotes(deleteId, notes) {
// find the index of the element of the note
  let deleteIndex = notes.findIndex(el => el.id === parseInt(deleteId));
// delete the note from the array
  let deletedNote = notes.splice(deleteIndex, 1);
  
  //write the the file again with updated content
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  )
}

module.exports = {createNewNote, deleteNotes};
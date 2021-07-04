const fs = require('fs');
const path = require('path');



// Function to regenerate the notes data with the input
function createNewNote(body, notes) {

  // save the new object into the data.
  const note = body;

  notes.push(note);

  // write the db file again with updated content
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  )
  return note;
}

// Function to delete the chosen object from the notes array
function deleteNotes(id, notes) {

  notes.findIndex((el, index) => {
    if(el.id === parseInt(id)) {
      notes.splice(index, 1)
    } 
  });
  
  // write the the file again with updated content
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  )

}

module.exports = {createNewNote, deleteNotes};
const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return "your notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  debugger
  
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = function(title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed successfully"));
  } else {
    console.log(chalk.red.inverse("Note not removed"));
  }
  saveNotes(notesToKeep);
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.green.inverse('Your notes..'))
  notes.forEach((note) => {
    console.log(note.title);
    
  });
}

const readNotes= function (title) {
  const notes = loadNotes()
  const note= notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  }else{
    console.log(chalk.red.inverse('note not found'));
  }
}

const loadNotes = function() {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};

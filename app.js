const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// const msg= getnotes
// console.log(chalk.red.underline(msg))

// const com= process.argv[2]
// if(com==='Sajal'){
//     console.log('Adding Note');
// }else{
//     console.log('Removing Note')
// }

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder:{
      title:{
          describe: 'Read title',
          demandOption: true,
          type: 'string'
      }
  },
  handler: function(argv) {
    notes.readNotes(argv.title)
  }
});

yargs.command({
  command: "list",
  describe: "List a note",
  handler: function() {
    notes.listNotes()
  }
});

//console.log(yargs.argv);
yargs.parse();

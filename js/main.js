import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root) ;

// const view = new NotesView(app, {
//     onNoteAdd() {
//         console.log("Let's add a note");
//     },

//     onHoverTest() {
//         console.log("hovering over that button")
        
//     },
    
//     onNoteSelect(id) {
//         console.log("Note Selected:" + id);
//     },

//     onNoteDelete(id) {
//         console.log("Note Selected:" + id);
//     },
    
//     onNoteEdit(newTitle, newBody) {
//         console.log(newTitle); console.log(newBody);
//     }

// });

// const notes = NotesAPI.getAllNotes();

// view.updateNoteList(notes);


// view.updateActiveNote(notes[0]);




// NotesAPI.saveNote( {
//     title: "New Note!",
//     body: "I am a new note"
// })

// NotesAPI.saveNote( {
//     title: "we are editing again!",
//     body: "checking to edit again"
// });

// NotesAPI.deleteNote(732540);


// console.log(NotesAPI.getAllNotes());
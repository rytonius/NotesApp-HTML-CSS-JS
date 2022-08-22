export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        
        const CurrentDate = new Date();
        //date format
        const options = { 
            weekday:"long", year:"numeric", month:"numeric", day:"numeric", 
            hour:"numeric", minute:"numeric", second:"numeric", }

        const TimeZoneOffSet = CurrentDate.getTimezoneOffset() / 60
        
        const DateFormat = CurrentDate.toLocaleString('en-us', options)

        console.log(DateFormat + " | GMT-" + String(TimeZoneOffSet).padStart(2, '0') + "00")

        const existing = notes.find(note => note.id == noteToSave.id);
        // Edit/Update
        if (existing) {
            existing.title = noteToSave.title;            
            existing.body = noteToSave.body;
            existing.updated = CurrentDate.toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = CurrentDate.toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes))
    }
}


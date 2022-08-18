export default class NotesAPI {
    static getALLNOTES() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getALLNOTES();

        notesToSave.id = Math.floor(Math.random() * 1000000);
        notesToSave.updated = new Date().toISOString();
        notes.push(noteToSave);

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {

    }
}
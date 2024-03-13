// Function to add a new note
function addNote() {
    var noteInput = document.getElementById("noteInput").value;
    if (noteInput.trim() !== "") {
        var notesContainer = document.getElementById("notesContainer");
        var noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.innerHTML = noteInput + '<button class="delete-btn" onclick="deleteNote(this)">Delete</button>';
        notesContainer.appendChild(noteDiv);
        document.getElementById("noteInput").value = "";
    }
}

// Function to delete a note
function deleteNote(noteElement) {
    var notesContainer = document.getElementById("notesContainer");
    notesContainer.removeChild(noteElement.parentNode);
}

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Hardcoded credentials (VULNERABLE)
    if (user === "admin" && pass === "password123") {
        // Token stored in localStorage (VULNERABLE)
        localStorage.setItem("token", "valid-session");
        window.location = "dashboard.html";
    } else {
        document.getElementById("message").innerText = "Invalid credentials!";
    }
}

function loadNotes() {
    const token = localStorage.getItem("token");
    if (!token) window.location = "index.html"; // Client-side check (VULNERABLE)

    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const list = document.getElementById("notesList");

    list.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = note + 
        ` <button onclick="deleteNote(${index})">Delete</button>`;
        list.appendChild(li);
    });
}
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Hardcoded credentials (VULNERABLE)
    if (user === "admin" && pass === "password123") {
        // Token stored in localStorage (VULNERABLE)
        localStorage.setItem("token", "valid-session");
        window.location = "dashboard.html";
    } else {
        document.getElementById("message").innerText = "Invalid credentials!";
    }
}

function loadNotes() {
    const token = localStorage.getItem("token");
    if (!token) window.location = "index.html"; // Client-side check (VULNERABLE)

    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const list = document.getElementById("notesList");

    list.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = note + 
        ` <button onclick="deleteNote(${index})">Delete</button>`;
        list.appendChild(li);
    });
}

function addNote() {
    const noteContent = document.getElementById("noteArea").value;

    // No sanitization (VULNERABLE - XSS)
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push(noteContent);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

function deleteNote(i) {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

function logout() {
    localStorage.removeItem("token");
    window.location = "index.html";
}

function addNote() {
    const noteContent = document.getElementById("noteArea").value;

    // No sanitization (VULNERABLE - XSS)
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push(noteContent);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

function deleteNote(i) {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

function logout() {
    localStorage.removeItem("token");
    window.location = "index.html";
}

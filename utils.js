// Simple function to get token (client-side security flaw)
function getToken() {
    return localStorage.getItem("token");
}

// Simulates checking authentication (client-side bypass possible)
function isAuthenticated() {
    return getToken() === "valid-session";
}

// Redirect user if not logged in (client-side only)
function requireAuth() {
    if (!isAuthenticated()) {
        window.location = "index.html";
    }
}

// Clears all stored data (insecure storage clearing)
function clearAllData() {
    localStorage.clear();
}

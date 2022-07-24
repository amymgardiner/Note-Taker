const fs = require('fs');
const path = require('path');
const express = require('express');

// instantiate the server
const app = express();

// tell app to use heroku's environment variable port, if it has been set, and if not, default to port 3001
const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware that instructs the server to make certain files readily available and to not gate it behind a server endpoint
app.use(express.static('public'));

let { notes } = require("./db/db.json");

app.get("/api/notes", (req, res) => {
    res.json(notes);
});
  
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
  
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


// chain the listen() method onto our server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
const fs = require("fs");
const notesData = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        let saveNote = req.body;
        notesData.push(saveNote);
        res.json(saveNote);
    });
}
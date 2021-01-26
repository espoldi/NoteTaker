const fs = require("fs");
const notesData = require("../db/db.json");

module.exports = function(app) {

    let postNum = notesData.length;

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        let saveNote = req.body;
        let id = postNum;
        saveNote.id = id;
        postNum = postNum + 1;
        notesData.push(saveNote);
        res.json(saveNote);
    });

    app.delete("/api/notes/:id", function(req, res) {


    });
}
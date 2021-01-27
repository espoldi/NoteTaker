// Call dependencies
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listening to port
app.listen(PORT, function() {
    console.log("App listening to PORT " + PORT);
});
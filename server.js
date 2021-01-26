// Call dependencies
const express = require("express");
const app = express();
const PORT = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listening to port
app.listen(PORT, function() {
    console.log("App listening to PORT " + PORT);
});
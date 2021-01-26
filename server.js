// Call dependencies
const express = require("express");
const app = express();
const PORT = 8080;

require("./path/apiRoutes")(app);
require("./path/htmlRoutes")(app);

// Listening to port
app.listen(PORT, function() {
    console.log("App listening to PORT " + PORT);
});
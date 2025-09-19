const express = require("express");
const app = express();
const port = 3000;

// serving static fiule di folder public
//Serving static file
app.use(express.static("public"));

app.listen(port, (req, res) => {
  console.log("Server Running at http://localhost:${port}");
});



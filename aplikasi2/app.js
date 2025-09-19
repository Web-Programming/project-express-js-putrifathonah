// app.js
const express = require("express");
const app = express();
const port = 3000;

// Route Get
app.get("/", (req, res) => {
  res.send("Hello, ini halaman HOME dengan method GET");
});

// middleware untuk parsinf body request
app.use(express.json());

// Route POST
app.post("/submit", (req, res) => {
  const { name, npm, jeniskelamin } = req.body;
  res.send("hallo, ${name} dengan NPM ${npm}. Apakah kamu ${jeniskelamin}?");
});

//Serving static file
// menulis css dengan menggunakan express
app.use(express.static("public"));

app.listen(port, (req, res) => {
  console.log("Server Running at http://localhost:${port}");
});

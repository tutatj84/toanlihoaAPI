//initialize
const port = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const studentsJson = require("./student.json");
app = express();
app.use(bodyParser.json());

app.get("/student", (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.json({
    user: "game"
  })
  //res.append("Access-Control-Allow-Origin", "*").json("aaa");
  res.end();
});

// app.use((req, res, next) => {
//   res.append("Access-Control-Allow-Origin", "*");
//   next();
// });

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});
const express = require("express");
const app = express();
const cors = require('cors')
const path = require("path");
const PORT = 8080;
const bodyParser = require('body-parser');
const queries = require("../database/index.js");

app.use(cors());
// app.use(express.static(path.join(__dirname, "./frontend/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log('GET WORKS!')
  res.end();
});

app.post('/', (req, res) => {
  console.log('POST WORKS!')
  res.end()
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});

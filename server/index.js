const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
// var mongoose = require('mongoose');

const PORT = 8080;
const bodyParser = require('body-parser');
const queries = require("../database/index.js");
// var uri = 'mongodb://localhost/UNZWILLING';
// var router = express.Router();

app.use(cors());
// app.use('/', router)
// app.use(express.static(path.join(__dirname, "./frontend/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/products/:id', (req, res) => {
  // WONDER WHEN THIS END POINT WILL BE DECIDED???
  var id = req.params.id;
  // REFACTOR testID, THIS IS ONLY TESTING PURPOSE
  var testId = 1;

  queries.getOneProductData(id, (err, results) => {
    if (err) {
      res.status(404).send("ERROR with getOneProductData")
    } else {
      // console.log("RESULT FROM MongoDB:", results);
      res.status(200).send(results)
    }
  })
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});

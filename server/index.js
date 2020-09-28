/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = 8010;
const bodyParser = require('body-parser');
const queries = require('../database/index.js');

app.use(cors());
// app.use('/', router)
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products/:id', (req, res) => {
  // WONDER WHEN THIS END POINT WILL BE DECIDED???
  const { id } = req.params;
  // REFACTOR testID, THIS IS ONLY TESTING PURPOSE
  // const testId = 1;

  queries.getOneProductData(id, (err, results) => {
    if (err) {
      res.status(404).send('ERROR with getOneProductData');
    } else {
      // console.log("RESULT FROM MongoDB:", results);
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});

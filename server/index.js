/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const queries = require('../database/index.js');

const app = express();

const PORT = 3002;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products/productInfo/:id', (req, res) => {
  const { id } = req.params;
  queries.getOneProductData(id, (err, results) => {
    if (err) {
      res.status(404).send('ERROR with getOneProductData');
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});

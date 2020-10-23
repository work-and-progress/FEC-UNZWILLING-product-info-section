const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../databaseSDC/indexPost.js');

const app = express();

const PORT = 3002;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getProduct/:pid', async (req, res) => {
  const { pid } = req.params;
  try {
    const { rows } = await db.getProduct(pid);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send('No product exists');
  }
});

app.get('/getProduct/:pid/:skuName', async (req, res) => {
  const { pid, skuName } = req.params;
  try {
    const { rows } = await db.getProductSku(pid, skuName);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send('No sku exists');
  }
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});

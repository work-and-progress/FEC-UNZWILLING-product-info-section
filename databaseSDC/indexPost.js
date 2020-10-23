const { Pool } = require('pg');

const credentials = require('./postgresConfig.js');

const pool = new Pool(credentials);

const getProduct = async (pid) => pool.query(`select * from products as a join product_sku as b on a.pid = b.pid where a.pid = ${pid} order by discountpercentage desc limit 1`);

const getProductSku = async (pid, skuName) => pool.query(`select distinct on (a.pid, b.skuname) * from products as a join product_sku as b on a.pid = b.pid where a.pid = ${pid} and b.skuname = '${skuName}'`);

module.exports = {
  getProduct,
  getProductSku,
};

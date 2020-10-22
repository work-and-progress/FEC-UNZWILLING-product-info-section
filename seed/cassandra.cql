SOURCE '/mydir/myfile.cql'
DROP KEYSPACE IF EXISTS product_info;

CREATE KEYSPACE product_info
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE product_info;

CREATE TABLE temp_table(
  pid INT,
  fiveStarReviews INT,
  fourStarReviews INT,
  threeStarReviews INT,
  twoStarReviews INT,
  oneStarReviews INT,
  numberOfReviews INT,
  averageRating DECIMAL,
  name VARCHAR,
  category VARCHAR,
  description VARCHAR,
  specificationItemNo INT,
  measurements map<text, text>,
  characteristics map<text, text>,
  skus LIST<VARCHAR>,
  skuName VARCHAR,
  mainImg VARCHAR,
  subImg LIST<VARCHAR>,
  quantity INT,
  price DECIMAL,
  discountPercentage INT,
  discount VARCHAR,
  PRIMARY KEY ((pid, skuName))
);

COPY temp_table (pid, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews, numberOfReviews, averageRating, name, category, description, specificationItemNo, measurements, characteristics, skus, skuName, mainImg, subImg, quantity, price, discountPercentage, discount) FROM 'mynewfile.csv' WITH DELIMITER='|';
AND HEADER=TRUE;

CREATE TABLE products(
  pid INT,
  fiveStarReviews INT,
  fourStarReviews INT,
  threeStarReviews INT,
  twoStarReviews INT,
  oneStarReviews INT,
  numberOfReviews INT,
  averageRating DECIMAL,
  name VARCHAR,
  category VARCHAR,
  description VARCHAR,
  specificationItemNo INT,
  measurements map<text, text>,
  characteristics map<text, text>,
  skus SET<VARCHAR>,
  skuName VARCHAR,
  mainImg VARCHAR,
  subImg SET<VARCHAR>,
  quantity INT,
  price DECIMAL,
  discountPercentage INT,
  discount VARCHAR,
  PRIMARY KEY (pid)
);

COPY products (pid, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews, numberOfReviews, averageRating, name, category, description, specificationItemNo, measurements, characteristics, skus, skuName, mainImg, subImg, quantity, price, discountPercentage, discount) FROM 'mynewfile.csv' WITH DELIMITER='|';
AND HEADER=TRUE;

CREATE TABLE products_sku(
  pid INT,
  skuName VARCHAR,
  mainImg VARCHAR,
  subImg SET<VARCHAR>,
  quantity INT,
  price DECIMAL,
  discountPercentage INT,
  discount VARCHAR,
  PRIMARY KEY ((pid, skuName))
);


COPY temp_table(pid, skuName, mainImg, subImg, quantity, price, discountPercentage, discount) TO 'temp.csv';
COPY products_sku (pid, skuName, mainImg, subImg, quantity, price, discountPercentage, discount) FROM 'temp.csv';
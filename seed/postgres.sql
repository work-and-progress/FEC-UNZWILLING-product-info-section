DROP DATABASE IF EXISTS product_info;

CREATE DATABASE product_info;

-- Make sure we're using our `product_info` database
\c product_info;

-- create a temporary table
CREATE TABLE IF NOT EXISTS temp_table(
  pid INT,
  fiveStarReviews INT,
  fourStarReviews INT,
  threeStarReviews INT,
  twoStarReviews INT,
  oneStarReviews INT,
  numberOfReviews INT,
  averageRating NUMERIC,
  name VARCHAR,
  category VARCHAR,
  description VARCHAR,
  specificationItemNo INT,
  measurements JSONB,
  characteristics JSONB,
  skus VARCHAR[],
  skuName VARCHAR,
  mainImg VARCHAR,
  subImg VARCHAR[],
  quantity INT,
  price NUMERIC,
  discountPercentage NUMERIC,
  discount VARCHAR
);

-- We can create our user table
CREATE TABLE IF NOT EXISTS products (
  pid INT PRIMARY KEY,
  fiveStarReviews INT,
  fourStarReviews INT,
  threeStarReviews INT,
  twoStarReviews INT,
  oneStarReviews INT,
  numberOfReviews INT,
  averageRating NUMERIC,
  name VARCHAR,
  category VARCHAR,
  description VARCHAR,
  specificationItemNo INT,
  measurements VARCHAR,
  characteristics VARCHAR,
  skus VARCHAR
);

-- We can create our post table
CREATE TABLE IF NOT EXISTS product_sku (
  id SERIAL PRIMARY KEY,
  pid INT,
  skuName VARCHAR,
  mainImg VARCHAR,
  subImg VARCHAR,
  quantity INT,
  price NUMERIC,
  discountPercentage NUMERIC,
  discount VARCHAR,
  FOREIGN KEY (pid)
    REFERENCES products(pid)
);

--copy info into products table
COPY temp_table
--(pid, fiveStarReviews, fourStarReviews, threeStarReviews, twoStarReviews, oneStarReviews, numberOfReviews, averageRating, name, category, description, specificationItemNo, measurements, characteristics, skus)
FROM '/Users/MisterStigster/Desktop/product-info/seed/productsLittle.csv'
DELIMITER '|'
CSV HEADER;
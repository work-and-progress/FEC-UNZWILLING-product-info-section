const faker = require('faker');
const fs = require('fs');

const writeProducts = fs.createWriteStream('productsLittle.csv');
writeProducts.write('pid| fiveStarReviews| fourStarReviews| threeStarReviews| twoStarReviews| oneStarReviews| numberOfReviews| averageRating| name| category| description| specificationItemNo| measurements| characteristics| skus| skuName| mainImg| subImg| quantity| price| discountPercentage| discount \n', 'utf8');

function writeTenMillionProducts(writer, encoding, callback) {
  let totalRecords = 100;
  let pid = 0;
  function write() {
    let canStillWrite = true;
    while (totalRecords > 0 && canStillWrite) {
      totalRecords -= 1;
      pid += 1;
      let data;
      const fiveStarReviews = faker.random.number({ min: 0, max: 50 });
      const fourStarReviews = faker.random.number({ min: 0, max: 50 });
      const threeStarReviews = faker.random.number({ min: 0, max: 50 });
      const twoStarReviews = faker.random.number({ min: 0, max: 50 });
      const oneStarReviews = faker.random.number({ min: 0, max: 50 });
      const numberOfReviews = fiveStarReviews + fourStarReviews + threeStarReviews + twoStarReviews + oneStarReviews;
      const averageRating = ((5 * fiveStarReviews + 4 * fourStarReviews +  3 * threeStarReviews + 2 * twoStarReviews + oneStarReviews) / numberOfReviews).toFixed(2);
      const name = faker.commerce.product();
      const category = faker.lorem.words();
      const description = faker.lorem.paragraphs(1);
      const specificationItemNo = faker.random.number({ min: 0, max: 999 });
      let measurements = {};
      for (let i = 0; i < faker.random.number({ min: 3, max: 5 }); i++) {
        const uniqueMeasurement = faker.commerce.productAdjective();
        measurements[uniqueMeasurement] = faker.lorem.sentence();
      }
      measurements = JSON.stringify(measurements);
      measurements = measurements.replace(/"/gi, '"""');
      let characteristics = {};
      for (let i = 0; i < faker.random.number({ min: 3, max: 5 }); i++) {
        const uniqueCharacteristic = faker.commerce.department();
        characteristics[uniqueCharacteristic] = faker.lorem.sentence();
      }
      characteristics = JSON.stringify(characteristics);
      characteristics = characteristics.replace(/"/gi, '"""');

      const numOfSkus = faker.random.number({ min: 1, max: 8 });
      const skusArr = [];
      for (let i = 0; i < numOfSkus; i++) {
        skusArr.push(faker.commerce.color());
      }
      let skus = JSON.stringify(skusArr);
      skus = skus.replace('[', '{');
      skus = skus.replace(']', '}');

      // if (numOfSkus > 1) {
      for (let i = 0; i < numOfSkus; i++) {
        const skuName = skusArr[i];
        const mainImg = faker.image.image();
        let subImg = [mainImg];
        for (let j = 0; i < faker.random.number({ min: 0, max: 6 }); j++) {
          subImg.push(faker.image.image());
        }
        subImg = JSON.stringify(subImg);
        subImg = subImg.replace('[', '{');
        subImg = subImg.replace(']', '}');
        const quantity = faker.random.number({ min: 0, max: 20 });
        const price = faker.commerce.price();
        let discountPercentage = 0;
        const discount = faker.random.arrayElement(["Yes", "No"]);
        if (discount === 'Yes') {
          discountPercentage = faker.random.number({ min: 10, max: 50 });
        }
        data = `${pid}| ${fiveStarReviews}| ${fourStarReviews}| ${threeStarReviews}| ${twoStarReviews}| ${oneStarReviews}| ${numberOfReviews}| ${averageRating}| ${name}| ${category}| ${description}| ${specificationItemNo}| "${measurements}"| "${characteristics}"| ${skus}| ${skuName}| ${mainImg}| ${subImg}| ${quantity}| ${price}| ${discountPercentage}| ${discount}\n`;

        if (totalRecords === 0 && i === numOfSkus - 1) {
          writer.write(data, encoding, callback);
        } else {
          canStillWrite = writer.write(data, encoding);
        }
      }
      // }
      // else {
      //   data = `${pid}| ${fiveStarReviews}| ${fourStarReviews}| ${threeStarReviews}| ${twoStarReviews}| ${oneStarReviews}| ${numberOfReviews}| ${averageRating}| ${name}| ${category}| ${description}| ${specificationItemNo}| ${measurements}| ${characteristics}| \n`;
      //   if (totalRecords === 0) {
      //     writer.write(data, encoding, callback);
      //   } else {
      //     canStillWrite = writer.write(data, encoding);
      //   }
      // }
    }
    if (totalRecords > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionProducts(writeProducts, 'utf-8', () => {
  writeProducts.end();
});
#CRUD operations:

**Create -**

post: ```"/products/productInfo/"```

status: *201*

body:
```
{
    "review": {
        "numberOfReviews": "Integer",
        "fivStarReviews": "Integer",
        "fourStarReviews": "Integer",
        "threeStarReviews": "Integer",
        "twoStarReviews": "Integer",
        "oneStarReviews": "Integer",
        "averageRating": "Float (2)"
    },
    "characteristics": {
        "color": "String",
        "countryOfOrigin": "String",
        "substance": "molestiae",
        "electricalPowerSupplyNeeded": "YN",
        "voltage": "Integer",
        "capacityMl": "Integer",
        "safetyShutOff": "YN",
        "motor": "String",
        "hiddenCordStorage": "YN",
        "programs": "Integer",
        "blade": "String",
        "speeds": "Integer",
        "lcdDisplay": "YN",
        "powerInput": "Integer"
    },
    "measurement": {
        "netWeight": "Float (2)",
        "capacityQt": "Float (2)",
        "lengthOfProduct": "Float (2)",
        "widthOfProduct": "Float (2)",
        "heightOfProduct": "Float (2)"
    },
    "images": [
        "Hyperlink1",
        "Hyperlink2" ...
    ],
    "_id": "id()",
    "id": "Integer",
    "category": "String",
    "name": "String",
    "price": "Float (2)",
    "discountPercentage": "Integer",
    "discount": "YN",
    "description": "String",
    "specificationItemNo": "Integer,
    "mainImage": "hyperlink",
}
```
**Read -**

get: ```"/products/productInfo/:id"```

status: *200*

response:
```
{
    "review": {
        "numberOfReviews": "Integer",
        "fivStarReviews": "Integer",
        "fourStarReviews": "Integer",
        "threeStarReviews": "Integer",
        "twoStarReviews": "Integer",
        "oneStarReviews": "Integer",
        "averageRating": "Float (2)"
    },
    "characteristics": {
        "color": "String",
        "countryOfOrigin": "String",
        "substance": "molestiae",
        "electricalPowerSupplyNeeded": "YN",
        "voltage": "Integer",
        "capacityMl": "Integer",
        "safetyShutOff": "YN",
        "motor": "String",
        "hiddenCordStorage": "YN",
        "programs": "Integer",
        "blade": "String",
        "speeds": "Integer",
        "lcdDisplay": "YN",
        "powerInput": "Integer"
    },
    "measurement": {
        "netWeight": "Float (2)",
        "capacityQt": "Float (2)",
        "lengthOfProduct": "Float (2)",
        "widthOfProduct": "Float (2)",
        "heightOfProduct": "Float (2)"
    },
    "images": [
        "Hyperlink1",
        "Hyperlink2" ...
    ],
    "_id": "id()",
    "id": "Integer",
    "category": "String",
    "name": "String",
    "price": "Float (2)",
    "discountPercentage": "Integer",
    "discount": "YN",
    "description": "String",
    "specificationItemNo": "Integer,
    "mainImage": "hyperlink",
}
```

**Update -**

put: ```"/products/productInfo/:id"```

status: *202*

body:
```
{
    "review": {
        "numberOfReviews": "Integer",
        "fivStarReviews": "Integer",
        "fourStarReviews": "Integer",
        "threeStarReviews": "Integer",
        "twoStarReviews": "Integer",
        "oneStarReviews": "Integer",
        "averageRating": "Float (2)"
    },
    "characteristics": {
        "color": "String",
        "countryOfOrigin": "String",
        "substance": "molestiae",
        "electricalPowerSupplyNeeded": "YN",
        "voltage": "Integer",
        "capacityMl": "Integer",
        "safetyShutOff": "YN",
        "motor": "String",
        "hiddenCordStorage": "YN",
        "programs": "Integer",
        "blade": "String",
        "speeds": "Integer",
        "lcdDisplay": "YN",
        "powerInput": "Integer"
    },
    "measurement": {
        "netWeight": "Float (2)",
        "capacityQt": "Float (2)",
        "lengthOfProduct": "Float (2)",
        "widthOfProduct": "Float (2)",
        "heightOfProduct": "Float (2)"
    },
    "images": [
        "Hyperlink1",
        "Hyperlink2" ...
    ],
    "_id": "id()",
    "id": "Integer",
    "category": "String",
    "name": "String",
    "price": "Float (2)",
    "discountPercentage": "Integer",
    "discount": "YN",
    "description": "String",
    "specificationItemNo": "Integer,
    "mainImage": "hyperlink",
}
```

**Delete -**

delete: ```"/products/productInfo/:id"```

status: *202*
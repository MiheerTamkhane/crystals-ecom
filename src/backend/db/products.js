import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

//  {
//   id: faker.random.uuid(),
//   name: faker.commerce.productName(),
//   image: faker.random.image(),
//   price: faker.commerce.price(),
//   material: faker.commerce.productMaterial(),
//   brand: faker.lorem.word(),
//   inStock: faker.random.boolean(),
//   fastDelivery: faker.random.boolean(),
//   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
//   offer: faker.random.arrayElement([
//     "Save 50",
//     "70% bonanza",
//     "Republic Day Sale"
//   ]),
//   idealFor: faker.random.arrayElement([
//     "Men",
//     "Women",
//     "Girl",
//     "Boy",
//     "Senior"
//   ]),
//   level: faker.random.arrayElement([
//     "beginner",
//     "amateur",
//     "intermediate",
//     "advanced",
//     "professional"
//   ]),
//   color: faker.commerce.color()
// }

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
];

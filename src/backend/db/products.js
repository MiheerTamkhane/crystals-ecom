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
// }

export const products = [
  {
    _id: uuid(),
    name: "Aquamarine Skyla Necklace(Sterling Silver)",
    image: "/assets/images/necklace/necklace1.webp",
    price: 3535,
    inStock: true,
    isBestSeller: false,
    material: "Aquamarine, Sterling Silver",
  },
  {
    _id: uuid(),
    name: "Tangerine Aura Quartz Delicate Silk Chord Necklace",
    image: "/assets/images/necklace/necklace2.webp",
    price: 1515,
    inStock: true,
    isBestSeller: true,
    material: "Tangerine Aura, 14k Gold Vermeil on Sterling Silver",
  },
  {
    _id: uuid(),
    name: "Pink Ruby Gold Star Necklace",
    image: "/assets/images/necklace/necklace3.webp",
    price: 3874,
    inStock: false,
    isBestSeller: true,
    material: "Pink Ruby, 14k Gold Vermeil on Sterling Silver",
  },
  {
    _id: uuid(),
    name: "Natural Citrine Necklace",
    image: "/assets/images/necklace/necklace4.webp",
    price: 5390,
    inStock: true,
    isBestSeller: false,
    material: "Natural Citrine, 14k Gold Vermeil on Sterling Silver",
  },
  {
    _id: uuid(),
    name: "Amethyst Delicate Silk Chord Necklace",
    image: "/assets/images/necklace/necklace5.webp",
    price: 1516,
    inStock: true,
    isBestSeller: true,
    material: "Amethyst, 14k Gold Vermeil on Sterling Silver",
  },
  {
    _id: uuid(),
    name: "Decadorn Citrine Gold Mini Raw Cut Gemstone Pendant",
    image: "/assets/images/necklace/necklace6.webp",
    price: 3032,
    inStock: true,
    isBestSeller: true,
    material: "Amethyst, 22k Gold Vermeil",
  },
  {
    _id: uuid(),
    name: "Decadorn Gold Birthstone Necklace - August Peridot",
    image: "/assets/images/necklace/necklace7.webp",
    price: 3399,
    inStock: true,
    isBestSeller: false,
    material: "Peridot stone, 22k Gold Vermeil",
  },
  {
    _id: uuid(),
    name: "Decadorn Gold Birthstone Pendant - November Citrine",
    image: "/assets/images/necklace/necklace8.webp",
    price: 3032,
    inStock: true,
    isBestSeller: true,
    material: "Citrine stone, 22k Gold Vermeil",
  },
  {
    _id: uuid(),
    name: "Decadorn Silver Birthstone Pendant - February Amethyst",
    image: "/assets/images/necklace/necklace9.webp",
    price: 2999,
    inStock: true,
    isBestSeller: false,
    material: "Amethyst stone, Sterling Silver",
  },
  {
    _id: uuid(),
    name: "Decadorn Silver Birthstone Pendant - April Herkimer Diamond",
    image: "/assets/images/necklace/necklace10.webp",
    price: 4999,
    inStock: true,
    isBestSeller: true,
    material: "Diamond stone, Sterling Silver",
  },
];

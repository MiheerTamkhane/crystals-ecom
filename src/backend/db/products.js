import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Aquamarine Skyla Necklace(Sterling Silver)",
    image: "/assets/images/necklace/necklace1.webp",
    price: 3535,
    inStock: true,
    isBestSeller: false,
    material: "Aquamarine, Sterling Silver",
    category: "necklace",
    intention: "anxiety-stress",
    rating: 2.5,
  },
  {
    _id: uuid(),
    name: "Decadorn Silver Birthstone Pendant - February Amethyst",
    image: "/assets/images/necklace/necklace9.webp",
    price: 1599,
    inStock: true,
    isBestSeller: false,
    material: "Amethyst stone, Sterling Silver",
    category: "necklace",
    intention: "clarity-growth",
    rating: 3,
  },

  {
    _id: uuid(),
    name: "Pink Ruby Gold Star Necklace",
    image: "/assets/images/necklace/necklace3.webp",
    price: 3874,
    inStock: false,
    isBestSeller: true,
    material: "Pink Ruby, 14k Gold Vermeil on Sterling Silver",
    category: "necklace",
    rating: 3.5,
    intention: "anxiety-stress",
  },

  {
    _id: uuid(),
    name: "Sparkle Ring - Moss Green Agate",
    image: "/assets/images/rings/ring1.webp",
    price: 2899,
    inStock: true,
    isBestSeller: false,
    material: "Moss Green Agate with a gold detail bead",
    category: "rings",
    rating: 3,
    intention: "clarity-growth",
  },
  {
    _id: uuid(),
    name: "Moonstone + Diamond Ring",
    image: "/assets/images/rings/ring5.webp",
    price: 2199,
    inStock: true,
    isBestSeller: true,
    material: "Moonstone, Diamond.",
    category: "rings",
    rating: 4,
    intention: "anxiety-stress",
  },
  {
    _id: uuid(),
    name: "Rose Quartz Coma Ring",
    image: "/assets/images/rings/ring2.webp",
    price: 3799,
    inStock: true,
    isBestSeller: false,
    material: "18Karat Gold vermeil on Sterling Silver",
    category: "rings",
    intention: "love-peace",
    rating: 3,
  },
  {
    _id: uuid(),
    name: "Peridot Heart and Diamonds Ring",
    image: "/assets/images/rings/ring3.webp",
    price: 4100,
    inStock: true,
    isBestSeller: false,
    material: "Peridot, Diamonds, 14k gold vermeil on sterling silver",
    category: "rings",
    intention: "anxiety-stress",
    rating: 4,
    rings: true,
  },
  {
    _id: uuid(),
    name: "Children's Fluorite Tumble Chip Bracelet",
    image: "/assets/images/bracelets/bracelet1.webp",
    price: 799,
    inStock: true,
    isBestSeller: true,
    material: "FLUORITE",
    category: "bracelets",
    intention: "love-peace",
    rating: 5,
  },
  {
    _id: uuid(),
    name: "Chakra Bracelets",
    image: "/assets/images/bracelets/bracelet6.webp",
    price: 799,
    inStock: true,
    isBestSeller: true,
    material: "Quartz",
    category: "bracelets",
    intention: "clarity-growth",
    rating: 5,
  },
  {
    _id: uuid(),
    name: "Rose Quartz Beaded Bracelet",
    image: "/assets/images/bracelets/bracelet4.webp",
    price: 349,
    inStock: true,
    isBestSeller: false,
    material: "Rose Quartz",
    category: "bracelets",
    intention: "clarity-growth",
    rating: 3.5,
  },
  {
    _id: uuid(),
    name: "Amazonite Tumblechip Bracelet",
    image: "/assets/images/bracelets/bracelet3.webp",
    price: 549,
    inStock: true,
    isBestSeller: true,
    material: "Amazonite",
    category: "bracelets",
    intention: "love-peace",
    rating: 3,
  },
  {
    _id: uuid(),
    name: "Natural Citrine Necklace",
    image: "/assets/images/necklace/necklace4.webp",
    price: 4390,
    inStock: true,
    isBestSeller: false,
    material: "Natural Citrine",
    category: "necklace",
    intention: "love-peace",
    rating: 2.5,
  },
  {
    _id: uuid(),
    name: "Amethyst Delicate Silk Chord Necklace",
    image: "/assets/images/necklace/necklace5.webp",
    price: 1516,
    inStock: true,
    isBestSeller: true,
    material: "Amethyst",
    category: "necklace",
    intention: "clarity-growth",
    rating: 4.5,
  },

  {
    _id: uuid(),
    name: "Decadorn Gold Birthstone Pendant - November Citrine",
    image: "/assets/images/necklace/necklace8.webp",
    price: 3032,
    inStock: true,
    isBestSeller: true,
    material: "Citrine stone",
    category: "necklace",
    intention: "anxiety-stress",
    rating: 4.5,
  },

  {
    _id: uuid(),
    name: "Tangerine Aura Quartz Delicate Silk Chord Necklace",
    image: "/assets/images/necklace/necklace2.webp",
    price: 1515,
    inStock: true,
    isBestSeller: true,
    material: "Tangerine Aura",
    category: "necklace",
    intention: "love-peace",
    rating: 4,
  },
  {
    _id: uuid(),
    name: "Decadorn Silver Birthstone Pendant - April Herkimer Diamond",
    image: "/assets/images/necklace/necklace10.webp",
    price: 4999,
    inStock: true,
    isBestSeller: true,
    material: "Diamond stone",
    category: "necklace",
    intention: "anxiety-stress",
    rating: 4.5,
  },
];

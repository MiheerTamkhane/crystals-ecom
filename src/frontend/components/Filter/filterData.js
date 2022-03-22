import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Necklace",
    value: "necklace",
  },
  {
    _id: uuid(),
    categoryName: "Rings",
    value: "rings",
  },
  {
    _id: uuid(),
    categoryName: "Bracelets",
    value: "bracelets",
  },
];

const intention = [
  {
    _id: uuid(),
    value: "anxiety-stress",
    intentionName: "Anxiety/Stress",
  },
  {
    _id: uuid(),
    value: "clarity-growth",
    intentionName: "Clarity/Growth",
  },
  {
    _id: uuid(),
    value: "love-peace",
    intentionName: "Love/Peace",
  },
];

const userRatings = [
  {
    _id: uuid(),
    rating: "4 Stars & above",
    userRating: 4,
  },
  {
    _id: uuid(),
    rating: "3 Stars & above",
    userRating: 3,
  },
  {
    _id: uuid(),
    rating: "2 Stars & above",
    userRating: 2,
  },
];

const bySort = [
  {
    _id: uuid(),
    value: "LOW_TO_HIGH",
    name: " Low to High",
  },
  {
    _id: uuid(),
    value: "HIGH_TO_LOW",
    name: "High to Low",
  },
];
export default [categories, intention, userRatings, bySort];

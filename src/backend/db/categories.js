import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "necklace",
    inputType: "checkbox",
  },
  {
    _id: uuid(),
    categoryName: "rings",
    inputType: "checkbox",
  },
  {
    _id: uuid(),
    categoryName: "bracelets",
    inputType: "checkbox",
  },
];
const data = [
  {
    title: "Categories",
    actionType: "categories",
    types: [
      { typeTitle: "Necklace", inputType: "checkbox" },
      { typeTitle: "Rings", inputType: "checkbox" },
      { typeTitle: "Bracelets", inputType: "checkbox" },
    ],
  },
  {
    title: "By Intention",
    actionType: "byintention",
    types: [
      { typeTitle: "For Anxiety/Stress", inputType: "checkbox" },
      { typeTitle: "For Clarity/Growth", inputType: "checkbox" },
      { typeTitle: "For Love/Peace", inputType: "checkbox" },
    ],
  },
  {
    title: "Ratings",
    actionType: "ratings",
    types: [
      { typeTitle: "4 Stars & above", inputType: "radio" },
      { typeTitle: "3 Stars & above", inputType: "radio" },
      { typeTitle: "2 Stars & above", inputType: "radio" },
    ],
  },
  {
    title: "Sort By",
    actionType: "sortby",
    types: [
      { typeTitle: "Low to High", inputType: "radio" },
      { typeTitle: "High to Low", inputType: "radio" },
    ],
  },
];

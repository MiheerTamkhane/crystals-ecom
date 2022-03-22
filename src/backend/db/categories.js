import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  [
    {
      _id: uuid(),
      categoryName: "necklace",
    },
    {
      _id: uuid(),
      categoryName: "rings",
    },
    {
      _id: uuid(),
      categoryName: "bracelets",
    },
  ],
  [
    {
      _id: uuid(),
      intentionName: "anxiety-stress",
    },
    {
      _id: uuid(),
      intentionName: "clarity-growth",
    },
    {
      _id: uuid(),
      intentionName: "love-peace",
    },
  ],
];

// const intention = [
//   {
//     _id: uuid(),
//     intentionName: "anxiety-stress",
//   },
//   {
//     _id: uuid(),
//     intentionName: "clarity-growth",
//   },
//   {
//     _id: uuid(),
//     intentionName: "love-peace",
//   },
// ];

// export { categories, intention };

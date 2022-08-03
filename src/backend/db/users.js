import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Miheer",
    lastName: "Tamkhane",
    email: "miheer@gmail.com",
    password: bcyrpt.hashSync("miheer123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Miheer Tamkhane",
        street: "Subhash Road Opp.united Inc.Vile Parle",
        city: "Nashik",
        state: "Maharashtra",
        country: "India",
        zipCode: 400057,
        mobile: 9767656817,
      },
    ],
  },
];

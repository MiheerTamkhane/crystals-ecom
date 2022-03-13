import React from "react";
import Banner from "./Banner";
import Poster from "./Poster";
const Home = () => {
  const homeData = [
    {
      title: "Full Moon Collection",
      desc: " A curated collection of Crystals, chosen for the Full Moon. I time to reflect and let go.",
      img: "/assets/images/land-product1.jpg",
    },
    {
      title: "Crystal Jewellery",
      desc: "We have a beautiful range of jewellery to suit all budgets.",
      img: "/assets/images/land-product2.jpg",
    },
  ];

  return (
    <div>
      <Banner />
      <Poster data={homeData[0]} />
      <Poster data={homeData[1]} />
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../../components/Banner/Banner";

import Poster from "../../components/Poster/Poster";

const Home = () => {
  const homeData = [
    {
      title: "Full Moon Collection",
      desc: " A curated collection of Crystals, chosen for the Full Moon. I time to reflect and let go.",
      img: "/assets/images/land-product1.webp",
      left: true,
    },
    {
      title: "Crystal Jewellery",
      desc: "We have a beautiful range of jewellery to suit all budgets.",
      img: "/assets/images/land-product2.webp",
      left: false,
    },
  ];

  return (
    <div className="home">
      <Banner />
      <Poster data={homeData[0]} />
      <Poster data={homeData[1]} />
    </div>
  );
};

export default Home;

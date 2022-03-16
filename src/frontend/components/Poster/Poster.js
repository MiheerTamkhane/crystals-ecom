import React from "react";
import "./Poster.css";
import { NavLink } from "react-router-dom";
function Poster({ data }) {
  return (
    <section className="section-container">
      {data.left && (
        <div className="img-container">
          <img src={data.img} alt="poster-img" />
        </div>
      )}
      <div className="content">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <button className="ct-btn ct-gray">
          <NavLink to="/" className="link">
            SHOP HERE
          </NavLink>
        </button>
      </div>
      {!data.left && (
        <div className="img-container">
          <img src={data.img} alt="poster-img" />
        </div>
      )}
    </section>
  );
}

export default Poster;

// <section className="section-container">
//   <div className="content">
//     <h2>Crystal Jewellery</h2>
//     <p>We have a beautiful range of jewellery to suit all budgets.</p>
//     <p>
//       Citrine. This sun-filled stone is a powerful stone of personal will,
//       mental clarity, manifestation and motivation.
//     </p>
//     <button className="ct-btn ct-gray">
//       <a href="./products.html">Shop Here</a>
//     </button>
//   </div>
//   <div className="img-container">
//     <img src="/assets/images/land-product2.jpg" alt="" />
//   </div>
// </section>

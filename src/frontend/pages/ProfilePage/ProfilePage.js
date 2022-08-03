import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./ProfilePage.css";
const ProfilePage = ({ page }) => {
  const profileLinks = [
    {
      name: "Profile",
      route: "/profile/",
    },
    {
      name: "Orders",
      route: "/profile/orders",
    },
    {
      name: "Addresses",
      route: "/profile/addresses",
    },
    {
      name: "Settings",
      route: "/profile/settings",
    },
  ];

  // Taking location/pathname of previous page
  const location = useLocation();
  let prevPath = location?.state;

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      {location.state && prevPath.addAddress ? (
        <Link to={prevPath.from} className="go-to-products-wishlist ct-btn">
          Back to previous page
        </Link>
      ) : (
        <Link to="/products" className="go-to-products-wishlist ct-btn">
          Back to products
        </Link>
      )}
      <div className="profile-page-section">
        <ul className="user-profile-links">
          {profileLinks.map(({ route, name }) => {
            return (
              <NavLink
                key={name}
                to={route}
                className={({ isActive }) =>
                  isActive ? "profile-link-active" : "profile-link"
                }
              >
                {name}
              </NavLink>
            );
          })}
        </ul>
        <div className="profile-container">{page}</div>
      </div>
    </div>
  );
};

export { ProfilePage };

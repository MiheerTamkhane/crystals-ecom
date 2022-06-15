import React from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
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

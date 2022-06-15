import React from "react";
import "./ProfileCard.css";
import { useAuth } from "../../contexts/contextExport";
const ProfileCard = () => {
  const { auth } = useAuth();
  const { user } = auth;
  console.log(user);
  return (
    <div className="profile-card">
      <h2>Profile Details : </h2>
      <div className="profile-details">
        <p>
          <b>Username</b> : {user.firstName} {user.lastName}
        </p>
        <p>
          <b>Email</b> : {user.email}
        </p>
      </div>
    </div>
  );
};

export { ProfileCard };

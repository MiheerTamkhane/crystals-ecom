import React from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import "./Navbar.css";
import {
  useNavContext,
  useAuth,
  useWishlist,
  useCart,
} from "../../contexts/contextExport";
function Navbar() {
  const { setIsNav, logoutHandler } = useNavContext();
  const { auth, setAuth } = useAuth();
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  return (
    <nav className="nav-bar navbar">
      <div className="ct-nav-logo">
        <NavLink to="/" className="logo">
          <img src="/assets/images/Crystals.png" alt="logo" />
          <h1>CrystalKart</h1>
        </NavLink>
      </div>
      {/* Search bar will come here  */}
      <div className="ct-right-nav">
        <div className="hamburger nav-icon basic-badge">
          <span className="material-icons" onClick={() => setIsNav(true)}>
            menu
          </span>
        </div>
        <div className="ct-nav-user">
          <div className="ct-nav-icons ">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "basic-badge nav-icon icon-selected"
                  : "basic-badge nav-icon icon"
              }
            >
              <span className="material-icons-round">favorite_border</span>
              {wishlist.length > 0 && (
                <small className="badge-pop badge">{wishlist.length}</small>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "basic-badge nav-icon icon-selected"
                  : "basic-badge nav-icon icon"
              }
            >
              <span className="material-icons-outlined">shopping_bag</span>
              {cart?.productsInCart?.length > 0 && (
                <small className="badge-pop badge">
                  {cart?.productsInCart?.length}
                </small>
              )}
            </NavLink>

            {auth.status ? (
              <>
                <NavLink to="/products" className="basic-badge nav-icon icon">
                  <span
                    className="material-icons"
                    onClick={() => {
                      logoutHandler(setAuth);
                      toast("See you again, Logged out!", { icon: "👋" });
                    }}
                  >
                    logout
                  </span>
                </NavLink>
                <NavLink
                  to="/profile/"
                  className={({ isActive }) =>
                    isActive ? "nav-user-active" : "nav-user"
                  }
                >
                  <span className="material-icons-round">person</span>
                  <span className="user-name">
                    {" "}
                    Hi, {auth?.user?.firstName}
                  </span>
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "basic-badge nav-icon icon-selected"
                    : "basic-badge nav-icon icon"
                }
              >
                <span className="material-icons">login</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };

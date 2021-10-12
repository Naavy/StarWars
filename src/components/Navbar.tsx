import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWarsContext } from "../context/StarWarsContext";
import Button from "../components/Button";
import logo from "../images/navbar-logo.png";

import "../styles/Navbar.scss";

const Navbar: FC = () => {
  const { favList, currentUser, dispatchUser } = useContext(StarWarsContext);

  const logout = () => {
    dispatchUser({
      type: "CHANGE_USER",
      payload: { name: "", password: "" },
    });
  };

  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" width="200px" />
      </Link>
      <div className="navbar__user">
        <span>
          Hello{" "}
          {currentUser?.name ? (
            <>
              {currentUser.name},{" "}
              <Link to="/login">
                <Button variant="no-styles" onClick={logout}>
                  sign out
                </Button>
              </Link>
            </>
          ) : (
            <>
              unknown,{" "}
              <Link to="/login" className="navbar__user--signin">
                sign in
              </Link>
            </>
          )}
        </span>
        <span></span>
      </div>
      <div className="navbar__links">
        <Link to="/characters">Characters List</Link>
        <Link to="/favourites">Favourites ({favList.length})</Link>
        <Link to="/login" className="navbar__links--login">
          {currentUser?.name ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

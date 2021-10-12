import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { StarWarsContext } from "../context/StarWarsContext";

const Welcome: FC = () => {
  const { currentUser } = useContext(StarWarsContext);

  return (
    <>
      <h2>Welcome to Star Wars App!</h2>
      <p>
        You can view <Link to="/characters">the character list</Link>, add
        someone to your favorites list, or go to{" "}
        <Link to="/favourites">your favorites list</Link> and manage it
      </p>
      {!currentUser?.name ? <Link to="/login">Sign in</Link> : null}
    </>
  );
};

export default Welcome;

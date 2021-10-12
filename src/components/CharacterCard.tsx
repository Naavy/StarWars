import React, { FC, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StarWarsContext } from "../context/StarWarsContext";
import { CharacterType } from "../types/Character";

import "../styles/CharacterCard.scss";

const CharacterCard: FC<{ character: CharacterType; id: string }> = ({
  character,
  id,
}) => {
  const [buttonSymbol, setButtonSymbol] = useState<string>("+");
  const { favList, dispatchFav } = useContext(StarWarsContext);
  const { name } = character;

  useEffect(() => {
    if (favList.find((character) => character.url.includes(id))) {
      setButtonSymbol("-");
    } else {
      setButtonSymbol("+");
    }
  }, [favList, id, buttonSymbol]);

  const addFav = () => {
    dispatchFav({
      type: "ADD_FAV",
      payload: {
        ...character,
      },
    });
  };

  const removeFav = () => {
    dispatchFav({
      type: "REMOVE_FAV",
      payload: {
        ...character,
      },
    });
  };

  const checkFav = () => {
    if (favList.find((character) => character.name === name)) {
      removeFav();
    } else {
      addFav();
    }
  };

  return (
    <div className="character-card">
      <Link to={`/characters/${id}`} className="character-card__link">
        {name}
      </Link>
      <button className="character-card__button" onClick={checkFav}>
        {buttonSymbol}
      </button>
    </div>
  );
};

export default CharacterCard;

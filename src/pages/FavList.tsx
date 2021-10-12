import React, { FC, useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";
import CharacterCard from "../components/CharacterCard";
import ProblemAccess from "./ProblemAccess";
import { CharacterType } from "../types/Character";

import "../styles/CharactersList.scss";

const FavList: FC = () => {
  const { favList, currentUser } = useContext(StarWarsContext);

  const charactersList = favList.map(
    (character: CharacterType, index: number) => {
      const { name } = character;
      const arrayUrl = favList[index].url.split("/");
      const characterId = arrayUrl[arrayUrl.length - 2];
      return (
        <CharacterCard
          character={character}
          key={`${name}-${index}`}
          id={characterId}
        />
      );
    }
  );
  return (
    <>
      {currentUser?.name ? (
        <>
          <h2>Favourites characters:</h2>
          <div className="list">
            {charactersList.length ? charactersList : "there is nothing here"}
          </div>
        </>
      ) : (
        <ProblemAccess />
      )}
    </>
  );
};

export default FavList;

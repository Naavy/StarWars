import React, { FC } from "react";
import useFetch from "react-fetch-hook";
import CharacterCard from "./CharacterCard";
import { CharacterType } from "../types/Character";

import "../styles/CharactersList.scss";

interface CharactersListProps {
  url: string;
  word: string;
}

const CharactersList: FC<CharactersListProps> = ({ url, word }) => {
  const { data, error, isLoading } = useFetch<any>(url);

  if (error)
    return (
      <>Something went wrong. Try refreshing the page or come back later.</>
    );

  if (isLoading) return <>Loading....</>;

  const people = data.results;

  const charactersList = people.map(
    (character: CharacterType, index: number) => {
      const { name } = character;
      const arrayUrl = people[index].url.split("/");
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

  return <div className="list">{charactersList}</div>;
};

export default CharactersList;

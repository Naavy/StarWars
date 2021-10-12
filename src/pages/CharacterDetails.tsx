import React, { FC, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { StarWarsContext } from "../context/StarWarsContext";
import Button from "../components/Button";
import FilmsList from "../components/FilmsList";
import ProblemAccess from "./ProblemAccess";

import "../styles/CharacterDetails.scss";

const CharacterDetails: FC = () => {
  const { id } = useParams<{ id?: string }>();
  const urlAPI = `https://swapi.dev/api/people/${id}`;
  const { data, error, isLoading } = useFetch<any>(urlAPI);
  const { favList, dispatchFav, currentUser } = useContext(StarWarsContext);
  const [buttonText, setButtonText] = useState<string>("Add to favorites");

  useEffect(() => {
    if (favList.find((character) => character.url.includes(urlAPI))) {
      setButtonText("Remove from favorites");
    } else {
      setButtonText("Add to favorites");
    }
  }, [favList, urlAPI, buttonText]);

  if (error)
    return (
      <>Something went wrong. Try refreshing the page or come back later.</>
    );

  if (isLoading) return <>Loading....</>;

  const { name, height, mass, hair_color, films } = data;
  const filmsList = films.map((film: string) => {
    return film;
  });

  const addFav = () => {
    dispatchFav({
      type: "ADD_FAV",
      payload: {
        ...data,
      },
    });
  };

  const removeFav = () => {
    dispatchFav({
      type: "REMOVE_FAV",
      payload: {
        ...data,
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
    <>
      {currentUser?.name ? (
        <div className="character-details">
          <h2> {name}</h2> <span>Height: {height}</span>
          <span>Mass: {mass}</span> <span>Hair color: {hair_color}</span>
          <span className="character-details__films">
            Films: <FilmsList films={filmsList} />
          </span>
          <Button onClick={checkFav} variant="small" customClass="button-fav">
            {buttonText}
          </Button>
        </div>
      ) : (
        <ProblemAccess />
      )}
    </>
  );
};

export default CharacterDetails;

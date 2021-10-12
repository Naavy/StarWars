import React, { FC, useState, useEffect, useContext } from "react";
import useFetch from "react-fetch-hook";
import { StarWarsContext } from "../context/StarWarsContext";
import Button from "../components/Button";
import CharactersList from "../components/CharactersList";
import Search from "../components/Search";
import ProblemAccess from "./ProblemAccess";

import "../styles/CharactersList.scss";

const Characters: FC = () => {
  const [url, setUrl] = useState<string>("https://swapi.dev/api/people");
  const [word, setWord] = useState<string>("");
  const { data } = useFetch<any>(url);
  const { currentUser } = useContext(StarWarsContext);

  useEffect(() => {
    setUrl(`https://swapi.dev/api/people/?search=${word}`);
  }, [word]);

  const next = () => {
    setUrl(data.next);
  };

  const prev = () => {
    setUrl(data.previous);
  };

  return (
    <>
      {currentUser?.name ? (
        <>
          <Search word={word} setWord={setWord} />
          <h2>Characters:</h2>
          <div className="buttons">
            <Button
              onClick={prev}
              disabled={data ? !data.previous : true}
              variant="small"
              customClass="buttons__arrow"
            >
              {"< prev"}
            </Button>
            <Button
              onClick={next}
              disabled={data ? !data.next : true}
              variant="small"
              customClass="buttons__arrow"
            >
              {"next >"}
            </Button>
          </div>
          <CharactersList url={url} word={word} />
        </>
      ) : (
        <ProblemAccess />
      )}
    </>
  );
};

export default Characters;

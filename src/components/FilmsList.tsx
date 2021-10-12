import React, { FC } from "react";
import Film from "./Film";

import "../styles/FilmsList.scss";

interface FilmsListProps {
  films: string[];
}

const FilmsList: FC<FilmsListProps> = ({ films }) => {
  return (
    <div className="films-list">
      {films.map((film, index) => {
        return <Film film={film} key={index} />;
      })}
    </div>
  );
};

export default FilmsList;

import React, { FC } from "react";
import useFetch from "react-fetch-hook";

import "../styles/CharacterDetails.scss";

interface FilmsListProps {
  film: string;
}

const Film: FC<FilmsListProps> = ({ film }) => {
  const { data, error, isLoading } = useFetch<any>(film);

  if (error)
    return (
      <>Something went wrong. Try refreshing the page or come back later.</>
    );

  if (isLoading) return <span>Loading....</span>;

  return <span>{data.title}</span>;
};

export default Film;

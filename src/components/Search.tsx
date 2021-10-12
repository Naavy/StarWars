import React, { FC } from "react";

import "../styles/Search.scss";

interface SearchProps {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ word, setWord }) => {
  return (
    <input
      placeholder="Search..."
      value={word}
      onChange={(e) => setWord(e.target.value)}
      className="search"
    ></input>
  );
};

export default Search;

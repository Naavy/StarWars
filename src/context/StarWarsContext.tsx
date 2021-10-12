import React, { createContext, useEffect, useReducer } from "react";
import { FavReducer } from "../reducers/FavReducer";
import { UserReducer } from "../reducers/UserReducer";
import { CharacterType } from "../types/Character";
import { UserType } from "../types/User";

type StarWarsContextType = {
  currentUser: UserType | null;
  dispatchUser: React.Dispatch<{ type: string; payload: UserType }>;
  favList: CharacterType[];
  dispatchFav: React.Dispatch<{
    type: string;
    payload: CharacterType;
  }>;
};

export const StarWarsContext = createContext<StarWarsContextType>(
  {} as StarWarsContextType
);

export const StarWarsContextProvider: React.FC = ({ children }) => {
  const [currentUser, dispatchUser] = useReducer(UserReducer, {}, () => {
    const localData = localStorage.getItem("currentUser");
    return localData ? JSON.parse(localData) : [];
  });

  const [favList, dispatchFav] = useReducer(FavReducer, [], () => {
    const localData = localStorage.getItem("favList");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("favList", JSON.stringify(favList));
  }, [favList]);

  return (
    <StarWarsContext.Provider
      value={{
        currentUser,
        dispatchUser,
        favList,
        dispatchFav,
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};

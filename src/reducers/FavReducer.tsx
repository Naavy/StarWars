import { CharacterType } from "../types/Character";

export const FavReducer = (
  state: CharacterType[],
  action: { type: string; payload: CharacterType }
) => {
  switch (action.type) {
    case "ADD_FAV":
      return [
        ...state,
        {
          name: action.payload.name,
          height: action.payload.height,
          mass: action.payload.mass,
          hair_color: action.payload.hair_color,
          films: action.payload.films,
          url: action.payload.url,
        },
      ];
    case "REMOVE_FAV":
      return state.filter(
        (character: CharacterType) => character.name !== action.payload.name
      );
    default:
      return state;
  }
};

import { characterActionTypes } from "./character.types";
import { createAction } from "../utils";

export const setSearchField = (query) =>
    createAction(characterActionTypes.SET_SEARCH_QUERY, query);
  
  export const fetchDataStart = () =>
    createAction(characterActionTypes.FETCH_DATA_START);
  
  export const fetchDataSuccess = (characters) =>
    createAction(characterActionTypes.FETCH_DATA_SUCCESS, characters);
  
  export const fetchDataFailure = (errorMessage) =>
    createAction(characterActionTypes.FETCH_DATA_FAILURE, errorMessage);
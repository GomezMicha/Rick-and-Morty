import { characterActionTypes } from "./character.types";

const INITIAL_STATE = {
  characterInfo: [], 
  searchField: "",
  isFetching: false,
  errorMessage: null,
};

export const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case characterActionTypes.FETCH_DATA_START:
      return {...state, isFetching: true};
    case characterActionTypes.FETCH_DATA_SUCCESS:
      return { ...state, characterInfo: action.payload, isFetching: false };
    case characterActionTypes.FETCH_DATA_FAILURE:
      return {...state, errorMessage: action.payload, isFetching: false}
    case characterActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default characterReducer;
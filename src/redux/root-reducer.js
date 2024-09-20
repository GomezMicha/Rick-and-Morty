import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// Redux storage is a concept used to manage and persist the state
import storage from "redux-persist/lib/storage";

import characterReducer from "./character/character.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["store"]
}

const rootReducer = combineReducers({
    store: characterReducer,
});

export default persistReducer(persistConfig, rootReducer)
import { createStore } from "redux";
import { combineReducers } from "redux";

import search_reducer from "./../reducers/search_reducer";
import films_reducer from "./../reducers/films_reducer";

let store = createStore(combineReducers({
    searchBlock: search_reducer,
    films: films_reducer
}))

window.store = store;

export default store;
import { createStore } from "redux";
import { combineReducers } from "redux";

import search_reducer from "./../reducers/search_reducer";

let store = createStore(combineReducers({
    searchBlock: search_reducer
}))

window.store = store;

export default store;
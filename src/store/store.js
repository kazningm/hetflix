import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import films_reducer from "./../reducers/films_reducer";
import action_list_reducer from "./../reducers/action_list_reducer";

let store = createStore(combineReducers({
    films: films_reducer,
    action_list: action_list_reducer
}), applyMiddleware(thunk))

window.store = store;

export default store;
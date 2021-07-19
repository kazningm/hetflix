import _ from "lodash";

const CHANGE_FILMS_LIST = "CHANGE_FILMS_LIST";
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";  

const init_state = {
    isLoaderShow: false,
    filmsList: []
}

const films_reducer = (state=init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    if (action.type === CHANGE_FILMS_LIST) {
        stateCopy.filmsList = action.data
    } else if (action.type === SHOW_LOADER) {
        stateCopy.isLoaderShow = true;
    } else if (action.type === HIDE_LOADER) {
        stateCopy.isLoaderShow = false;
    }

    return stateCopy;
}

export default films_reducer;

export let changeFilmsList = (data) => ({
    type: CHANGE_FILMS_LIST,
    data
})

export let showLoader = () => ({
    type: SHOW_LOADER
})

export let hideLoader = () => ({
    type: HIDE_LOADER
})


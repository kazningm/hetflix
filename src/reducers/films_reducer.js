import _ from "lodash";

const CHANGE_FILMS_LIST = "CHANGE_FILMS_LIST"; 

const init_state = {
    filmsList: []
}

const films_reducer = (state=init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    if (action.type === CHANGE_FILMS_LIST) {
        stateCopy.filmsList = action.data
    }

    return stateCopy;
}

export default films_reducer;

export let changeFilmsList = (data) => ({
    type: CHANGE_FILMS_LIST,
    data
})


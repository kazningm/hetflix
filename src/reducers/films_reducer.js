import _ from "lodash";
import axios from "axios";

const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

const CHANGE_FILMS_LIST = "CHANGE_FILMS_LIST";
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";

const SHOW_FILMS = "SHOW_FILMS";
const HIDE_FILMS = "HIDE_FILMS";

const SHOW_ERROR = "SHOW_ERROR";
const HIDE_ERROR = "HIDE_ERROR";

const CHANGE_SORT = "CHANGE_SORT";

const SHOW_FILM_INFO = "SHOW_FILM_INFO";
const HIDE_FILM_INFO = "HIDE_FILM_INFO";

const CHANGE_OFFSET = "CHANGE_OFFSET";

const CHANGE_GENRE = "CHANGE_GENRE";

const CHANGE_FILM_INFO_FOR_VIEW = "CHANGE_FILM_INFO_FOR_VIEW";

const SET_COUNT_DELETED_FILMS = "SET_COUNT_DELETED_FILMS";

export const NOT_SORTED = "-";
export const RELEASE_DATA = "release_date";
export const VOTE_AVERAGE = "vote_average";
export const BUDGET = "budget";

export const ALL = "All";
export const ACTION = "Action";
export const CRIME = "Crime";
export const DOCUMENTARY = "Documentary";
export const HORROR = "Horror";
export const COMEDY = "Comedy";
export const FANTASY = "Fantasy";


const init_state = {
    search_value: "",
    genres: [ACTION, CRIME, DOCUMENTARY, HORROR, COMEDY, FANTASY],
    genre: ALL,
    placeholder: "What do you want to watch?",
    isLoaderShow: false,
    isFilmsShow: true,
    isErrorShow: false,
    sortList: [NOT_SORTED, RELEASE_DATA, VOTE_AVERAGE, BUDGET],
    sort: NOT_SORTED,
    filmsList: [],
    offset: 0,
    isFilmInfoShow: false,
    filmInfoView: {}, // for writing info about film
    countDeletedFilms: 0
}

const films_reducer = (state = init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    switch (action.type) {
        case CHANGE_FILMS_LIST:
            stateCopy.filmsList = [...action.data];
            break;
        case SHOW_LOADER:
            stateCopy.isLoaderShow = true;
            break;
        case HIDE_LOADER:
            stateCopy.isLoaderShow = false;
            break;
        case SHOW_FILMS:
            stateCopy.isFilmsShow = true;
            break;
        case HIDE_FILMS:
            stateCopy.isFilmsShow = false;
            break;
        case SHOW_ERROR:
            stateCopy.isErrorShow = true;
            break;
        case HIDE_ERROR:
            stateCopy.isErrorShow = false;
            break;
        case CHANGE_SORT:
            stateCopy.sort = action.sort;
            break;
        case CHANGE_SEARCH_VALUE:
            stateCopy.search_value = action.value;
            break;
        case SHOW_FILM_INFO:
            stateCopy.isFilmInfoShow = true;
            break;
        case HIDE_FILM_INFO:
            stateCopy.isFilmInfoShow = false;
            break;
        case CHANGE_OFFSET:
            stateCopy.offset = action.offset;
            break;
        case CHANGE_GENRE:
            stateCopy.genre = action.genre;
            stateCopy.offset = 1;
            break;
        case CHANGE_FILM_INFO_FOR_VIEW:
            stateCopy.filmInfoView = action.filmInfo;
            break;
        case SET_COUNT_DELETED_FILMS:
            stateCopy.countDeletedFilms += 1;
            break;
        default:
            return stateCopy;
    }
    return stateCopy;
}

export default films_reducer;

// ACTIONS //////////////////////////////////////////////////

export let showError = () => ({
    type: SHOW_ERROR
})

export let hideError = () => ({
    type: HIDE_ERROR
})

export let showLoader = () => ({
    type: SHOW_LOADER
})

export let hideLoader = () => ({
    type: HIDE_LOADER
})

export let showFilms = () => ({
    type: SHOW_FILMS
})

export let hideFilms = () => ({
    type: HIDE_FILMS
})

export let changeFilmsList = (data) => ({
    type: CHANGE_FILMS_LIST,
    data
})

export let changeSort = (sort) => ({
    type: CHANGE_SORT,
    sort
})

export let changeSearchValue = (value) => ({
    type: CHANGE_SEARCH_VALUE,
    value
})

export let changeFilmInfoView = (filmInfo) => ({
    type: CHANGE_FILM_INFO_FOR_VIEW,
    filmInfo
})

export let showFilmInfoView = () => ({
    type: SHOW_FILM_INFO
})

export let hideFilmInfoView = () => ({
    type: HIDE_FILM_INFO
})

export let changeOffset = (offset) => ({
    type: CHANGE_OFFSET,
    offset
})

export let changeGenre = (genre) => ({
    type: CHANGE_GENRE,
    genre
})

export let setCountDeletedFilms = () => ({
    type: SET_COUNT_DELETED_FILMS
})

export let getFilms = (genre = ALL, sort = NOT_SORTED, search = "", offset = 1) => {
    return (dispatch) => {
        dispatch(hideError());
        dispatch(hideFilms());
        dispatch(showLoader());

        let params = {
            sortBy: sort === NOT_SORTED ? null : sort,
            filter: genre === ALL ? null : genre,
            limit: 10,
            offset: offset*10
        };

        if (search === "") {
            params.filter = genre === ALL ? null : genre;
        } else {
            params.searchBy = "title";
            params.search = search;
        }
        axios.get("http://localhost:4000/movies", { params })
            .then(response => {
                let films = response.data.data;
                dispatch(changeFilmsList(films))
            })
            .then(() => {
                dispatch(hideError());
                dispatch(hideLoader());
                dispatch(showFilms());
            })
            .catch(err => {
                dispatch(hideLoader());
                dispatch(hideFilms());
                dispatch(showError())
                // обернуть FilmsGrid в ErrorBoundary
                console.error(err);
                throw err;
            })
    }
}


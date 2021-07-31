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
const CHANGE_FILM_INFO_FOR_EDIT = "CHANGE_FILM_INFO_FOR_EDIT";
const CHANGE_FILM_INFO_FOR_VIEW = "CHANGE_FILM_INFO_FOR_VIEW";

const SHOW_FILM_INFO = "SHOW_FILM_INFO";
const HIDE_FILM_INFO = "HIDE_FILM_INFO";

export const NOT_SORTED = "NOT_SORTED";
export const RELEASE_DATA = "RELEASE_DATA";
export const RATING = "RATING";

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
    placeholder: "What do you want to watch?",
    isLoaderShow: false,
    isFilmsShow: true,
    isErrorShow: false,
    sortList: [NOT_SORTED, RELEASE_DATA, RATING],
    sort: NOT_SORTED,
    filmsList: [],
    isFilmInfoShow: false,
    filmInfoEdit: {}, // for taking info for edit form
    filmInfoView: {} // for writing info about film
}

const films_reducer = (state=init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    switch (action.type) {
        case  CHANGE_FILMS_LIST:
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
        case CHANGE_FILM_INFO_FOR_EDIT:
            stateCopy.filmInfoEdit = action.filmInfo;
            break;
        case CHANGE_FILM_INFO_FOR_VIEW:
            stateCopy.filmInfoView = action.filmInfo;
            break;
        case SHOW_FILM_INFO:
            stateCopy.isFilmInfoShow = true;
            break;
        case HIDE_FILM_INFO:
            stateCopy.isFilmInfoShow = false;
            break;
        default:
            return stateCopy;
    }
    return stateCopy;
}

export default films_reducer;

let sortFilms = (arr, sort) => {
    if (sort === RELEASE_DATA) {
        return _.sortBy(arr, (film) => film.release_date).reverse()
    } else if (sort === RATING) {
        return _.sortBy(arr, (film) => film.vote_average).reverse()
    } 
    return arr;
}

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

export let getFilms = (genre=ALL, sort=NOT_SORTED, search) => {
    return (dispatch) => {
        dispatch(hideError());
        dispatch(hideFilms());
        dispatch(showLoader());
        axios.get("http://localhost:4000/movies")
            .then(data => {
                let films = sortFilms(data.data.data, sort);
                if (genre !== ALL)
                    dispatch(changeFilmsList(films.filter(film => _.includes(film.genres, genre))));
                else if (genre === ALL && search) 
                    dispatch(changeFilmsList(films.filter(film => { 
                                        let t = film.title.toLowerCase()
                                        let s = search.toLowerCase()
                                        return t.indexOf(s) !== -1
                                    })));
                else dispatch(changeFilmsList(films));
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

export let changeSort = (sort) => ({ 
    type: CHANGE_SORT, 
    sort 
})

export let changeSearchValue = (value) => ({
    type: CHANGE_SEARCH_VALUE,
    value
})

export let changeFilmInfoEdit = (filmInfo) => ({
    type: CHANGE_FILM_INFO_FOR_EDIT,
    filmInfo
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


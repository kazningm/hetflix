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
const NOT_SORTED = "NOT_SORTED";
const RELEASE_DATA = "RELEASE_DATA";
const RATING = "RATING";


const init_state = {
    search_value: "",
    genres: ["Action", "Crime", "Documentary", "Horror", "Comedy", "Fantasy"],
    placeholder: "What do you want to watch?",
    isLoaderShow: false,
    isFilmsShow: true,
    isErrorShow: false,
    sortList: [NOT_SORTED, RELEASE_DATA, RATING],
    sortBy: NOT_SORTED,
    filmsList: []
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
            stateCopy.sortBy = action.sort;
            break;
        case CHANGE_SEARCH_VALUE:
            stateCopy.search_value = action.value;
            break;
        default:
            return stateCopy;
    }
    return stateCopy;

    // if (action.type === CHANGE_FILMS_LIST) {
    //     stateCopy.filmsList = action.data
    // } else if (action.type === SHOW_LOADER) {
    //     stateCopy.isLoaderShow = true;
    // } else if (action.type === HIDE_LOADER) {
    //     stateCopy.isLoaderShow = false;
    // } else if (action.type === SHOW_FILMS) {
    //     stateCopy.isFilmsShow = true;
    // } else if (action.type === HIDE_FILMS) {
    //     stateCopy.isFilmsShow = false;
    // } else if (action.type === SHOW_ERROR) {
    //     stateCopy.isErrorShow = true;
    // } else if (action.type === HIDE_ERROR) {
    //     stateCopy.isErrorShow = false;
    // } else if (action.type === CHANGE_SORT) {
    //     stateCopy.sortBy = action.sort;
    // } else if (action.type === CHANGE_SEARCH_VALUE) {
    //     stateCopy.search_value = action.value;
    // }

    // return stateCopy;
}

export default films_reducer;

let sort = (arr, sort) => {
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

export let getFilms = (genre, sortBy, search_value) => {
    return (dispatch) => {
        dispatch(hideError());
        dispatch(hideFilms());
        dispatch(showLoader());
        axios.get("http://localhost:4000/movies")
            .then(data => {
                let films = sort(data.data.data, sortBy);
                if (genre !== "All") {
                    if (genre === "Search") {
                        if (search_value) 
                            dispatch(changeFilmsList(films.filter(film => { 
                                let f = film.title.toLowerCase()
                                let sv = search_value.toLowerCase()
                                return f.indexOf(sv) !== -1
                            })));
                        else 
                            dispatch(changeFilmsList([]));
                    }
                    else
                        dispatch(changeFilmsList(films.filter(film => _.includes(film.genres, genre))));
                }
                else 
                    dispatch(changeFilmsList(films));
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


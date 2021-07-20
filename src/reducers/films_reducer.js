import _ from "lodash";
import axios from "axios";

const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

const CHANGE_FILMS_LIST = "CHANGE_FILMS_LIST";
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";  

const SHOW_FILMS = "SHOW_FILMS";
const HIDE_FILMS = "HIDE_FILMS"; 

const CHANGE_SORT = "CHANGE_SORT";
const NOT_SORTED = "NOT_SORTED";
const RELEASE_DATA = "RELEASE_DATA";
const RATING = "RATING";


const init_state = {
    search_value: "",
    placeholder: "What do you want to watch?",
    isLoaderShow: false,
    isFilmsShow: true,
    sortList: [NOT_SORTED, RELEASE_DATA, RATING],
    sortBy: NOT_SORTED,
    filmsList: []
}

let sortBy = (arr, sort) => {
    if (sort === RELEASE_DATA) {
        return _.sortBy(arr, (film) => film.release_date).reverse()
    } else if (sort === RATING) {
        return _.sortBy(arr, (film) => film.vote_average).reverse()
    } 
    return arr;
}

const films_reducer = (state=init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    if (action.type === CHANGE_FILMS_LIST) {
        stateCopy.filmsList = action.data
    } else if (action.type === SHOW_LOADER) {
        stateCopy.isLoaderShow = true;
    } else if (action.type === HIDE_LOADER) {
        stateCopy.isLoaderShow = false;
    } else if (action.type === SHOW_FILMS) {
        stateCopy.isFilmsShow = true;
    } else if (action.type === HIDE_FILMS) {
        stateCopy.isFilmsShow = false;
    } else if (action.type === CHANGE_SORT) {
        stateCopy.sortBy = action.sort;
        stateCopy.filmsList = sortBy(stateCopy.filmsList, action.sort)
    } else if (action.type === CHANGE_SEARCH_VALUE) {
        stateCopy.search_value = action.value;
    }

    return stateCopy;
}

export default films_reducer;

// ACTIONS //////////////////////////////////////////////////

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

export let getFilmsByGenre = (genre) => {
    return (dispatch) => {
        dispatch(hideFilms());
        dispatch(showLoader());
        axios.get("http://localhost:4000/movies")
            .then(data => {
                let films = data.data.data;
                if (genre !== "All") {
                    dispatch(changeFilmsList(films.filter(film => _.includes(film.genres, genre))));
                }
                else 
                    dispatch(changeFilmsList(films));
            })
            .then(() => { 
                dispatch(showFilms());
                dispatch(hideLoader()); 
            })
            .catch(err => {
                dispatch(hideLoader());
                dispatch(hideFilms());
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

export const changeSearchValue = (value) => ({
    type: CHANGE_SEARCH_VALUE,
    value
})


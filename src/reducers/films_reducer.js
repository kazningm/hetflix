import _ from "lodash";
import axios from "axios";

const CHANGE_FILMS_LIST = "CHANGE_FILMS_LIST";
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";  

const CHANGE_SORT = "CHANGE_SORT";
const NOT_SORTED = "NOT_SORTED";
const RELEASE_DATA = "RELEASE_DATA";
const RATING = "RATING";


const init_state = {
    isLoaderShow: false,
    sortList: [NOT_SORTED, RELEASE_DATA, RATING],
    sortBy: NOT_SORTED,
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
    } else if (action.type === CHANGE_SORT) {
        stateCopy.sortBy = action.sort
    }

    return stateCopy;
}

export default films_reducer;

export let showLoader = () => ({
    type: SHOW_LOADER
})

export let hideLoader = () => ({
    type: HIDE_LOADER
})

export let changeFilmsList = (data) => ({
    type: CHANGE_FILMS_LIST,
    data
})

let sortBy = (arr, sort) => {
    if (sort === RELEASE_DATA) {
        return _.sortBy(arr, (film) => film.release_date).reverse()
    } else if (sort === RATING) {
        return _.sortBy(arr, (film) => film.vote_average).reverse()
    } 
    return arr;
}

export let getFilmsByGenre = (genre, sort) => {
    return (dispatch) => {
        dispatch(showLoader());
        axios.get("http://localhost:4000/movies")
            .then(data => {
                let films = sortBy(data.data.data, sort);
                if (genre !== "All") {
                    dispatch(changeFilmsList(films.filter(film => _.includes(film.genres, genre))));
                }
                else 
                    dispatch(changeFilmsList(films));
            })
            .then(() => { dispatch(hideLoader()) })
            .catch(err => {
                console.error(err);
                throw err;
            })        
    }
}

export let changeSort = (sort) => ({ 
    type: CHANGE_SORT, 
    sort 
})


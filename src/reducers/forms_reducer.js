import axios from "axios";
import _ from "lodash";

const ADD_FORM_SHOW = "ADD_FORM_SHOW";
const ADD_FORM_HIDE = "ADD_FORM_HIDE";
const EDIT_FORM_SHOW = "EDIT_FORM_SHOW";
const EDIT_FORM_HIDE = "EDIT_FORM_HIDE";

const DELETE_ACTION_SHOW = "DELETE_ACTION_SHOW";
const DELETE_ACTION_HIDE = "DELETE_ACTION_HIDE";
const LOGIN_SHOW = "LOGIN_SHOW";
const LOGIN_HIDE = "LOGIN_HIDE";
const SUCCESS_ACTION_SHOW = "SUCCESS_ACTION_SHOW";
const SUCCESS_ACTION_HIDE = "SUCCESS_ACTION_HIDE";
const ERROR_ACTION_SHOW = "ERROR_ACTION_SHOW";
const ERROR_ACTION_HIDE = "ERROR_ACTION_HIDE";
const CHANGE_FILM_INFO = "CHANGE_FILM_INFO";

const CHANGE_FILM_INFO_FOR_EDIT = "CHANGE_FILM_INFO_FOR_EDIT";

const init_state = {
    isAddFormShow: false,
    isEditFormShow: false,
    filmInfo: {},
    isDeleteActionShow: false,
    isLoginShow: false,
    isSuccessActionShow: false,
    isErrorActionShow: false,
    error_message: "Something went wrong",
    filmInfoEdit: {}, // for taking info for edit form
}

const forms_reducer = (state = init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    switch (action.type) {
        case ADD_FORM_SHOW:
            stateCopy.isAddFormShow = true;
            break;
        case ADD_FORM_HIDE:
            stateCopy.isAddFormShow = false;
            break;
        case EDIT_FORM_SHOW:
            stateCopy.isEditFormShow = true;
            break;
        case EDIT_FORM_HIDE:
            stateCopy.isEditFormShow = false;
            break;
        case DELETE_ACTION_SHOW:
            stateCopy.isDeleteActionShow = true;
            break;
        case DELETE_ACTION_HIDE:
            stateCopy.isDeleteActionShow = false;
            break;
        case LOGIN_SHOW:
            stateCopy.isLoginShow = true;
            break;
        case LOGIN_HIDE:
            stateCopy.isLoginShow = false;
            break;
        case SUCCESS_ACTION_SHOW:
            stateCopy.isSuccessActionShow = true;
            break;
        case SUCCESS_ACTION_HIDE:
            stateCopy.isSuccessActionShow = false;
            break;
        case ERROR_ACTION_SHOW:
            stateCopy.isErrorActionShow = true;
            break;
        case ERROR_ACTION_HIDE:
            stateCopy.isErrorActionShow = false;
            break;
        case CHANGE_FILM_INFO:
            stateCopy.filmInfo = action.filmInfo;
            break;
        case CHANGE_FILM_INFO_FOR_EDIT:
            stateCopy.filmInfoEdit = action.filmInfo;
            break;
        default:
            return stateCopy;
    }

    return stateCopy;
}

export default forms_reducer;

///////////////////////// ACTIONS /////////////////////////////////////

export let showAddForm = () => ({
    type: ADD_FORM_SHOW
})

export let hideAddForm = () => ({
    type: ADD_FORM_HIDE
})

export let showEditForm = () => ({
    type: EDIT_FORM_SHOW
})

export let hideEditForm = () => ({
    type: EDIT_FORM_HIDE
})

export let showDeleteAction = () => ({
    type: DELETE_ACTION_SHOW
})

export let hideDeleteAction = () => ({
    type: DELETE_ACTION_HIDE
})

export let showLogin = () => ({
    type: LOGIN_SHOW
})

export let hideLogin = () => ({
    type: LOGIN_HIDE
})

export let showSuccessAction = () => ({
    type: SUCCESS_ACTION_SHOW
})

export let hideSuccessAction = () => ({
    type: SUCCESS_ACTION_HIDE
})

export let showErrorAction = (error_message) => ({
    type: ERROR_ACTION_SHOW,
    error_message
})

export let hideErrorAction = () => ({
    type: ERROR_ACTION_HIDE
})

export let changeFilmInfo = (filmInfo) => ({
    type: CHANGE_FILM_INFO,
    filmInfo
})

export let changeFilmInfoEdit = (filmInfo) => ({
    type: CHANGE_FILM_INFO_FOR_EDIT,
    filmInfo
})

export let getFilm = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/movies/${id}`)
            .then(response => {
                if (response.status === 200) {
                    dispatch(changeFilmInfoEdit(response.data))
                } 
            })
    }
}

export let addFilm = (filmInfo) => {
    return (dispatch) => {
        let data = {
            ...filmInfo,
            vote_average: Number(filmInfo.vote_average),
            runtime: Number(filmInfo.runtime),
            vote_count: 0,
            budget: 0,
            revenue: 0
        }
        axios.post("http://localhost:4000/movies", data)
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(hideAddForm());
                    dispatch(showSuccessAction());
                } else if (response.status === 404) {
                    return Promise.reject(response.messages.join("\n"));
                } else {
                    return Promise.reject("Something went wrong");
                }
            })
            .catch(error => {
                dispatch(hideAddForm());
                dispatch(showErrorAction("Something went wrong"));
            })
    }
}

export let editFilm = (filmInfo) => {
    return (dispatch) => {
        let data = {
            ...filmInfo,
            vote_average: Number(filmInfo.vote_average),
            runtime: Number(filmInfo.runtime),
            vote_count: Number(filmInfo.vote_count),
            budget: Number(filmInfo.budget),
            revenue: Number(filmInfo.revenue),
        }
        axios.put("http://localhost:4000/movies", data)
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(hideEditForm());
                    dispatch(showSuccessAction());
                } else if (response.status === 400) {
                    return Promise.reject("Validation error");
                } else if (response.status === 404) {
                    return Promise.reject(response.messages.join("\n"));
                } else {
                    return Promise.reject("Something went wrong");
                }
            })
            .catch(error => {
                dispatch(hideEditForm());
                dispatch(showErrorAction(error));
            })
    }
}
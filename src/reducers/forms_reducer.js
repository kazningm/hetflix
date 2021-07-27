import _ from "lodash";

const ADD_FORM_SHOW = "ADD_FORM_SHOW";
const ADD_FORM_HIDE = "ADD_FORM_HIDE";
const EDIT_FORM_SHOW = "EDIT_FORM_SHOW";
const EDIT_FORM_HIDE = "EDIT_FORM_HIDE";
const DELETE_FILM_SHOW = "DELETE_FILM_SHOW";
const DELETE_FILM_HIDE = "DELETE_FILM_HIDE";
const LOGIN_SHOW = "LOGIN_SHOW";
const LOGIN_HIDE = "LOGIN_HIDE";
const SUCCESS_ACTION_SHOW = "SUCCESS_ACTION_SHOW";
const SUCCESS_ACTION_HIDE = "SUCCESS_ACTION_HIDE";
const ERROR_ACTION_SHOW = "ERROR_ACTION_SHOW";
const ERROR_ACTION_HIDE = "ERROR_ACTION_HIDE";
const CHANGE_FILM_INFO = "CHANGE_FILM_INFO";

const init_state = {
    isAddFormShow: false,
    isEditFormShow: false,
    filmInfo: {},
    isDeleteFilmShow: false,
    isLoginShow: false,
    isSuccessActionShow: false,
    isErrorActionShow: false
}

const forms_reducer = (state=init_state, action) => {
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
        case DELETE_FILM_SHOW:
            stateCopy.isDeleteFilmShow = true;
            break;
        case DELETE_FILM_HIDE:
            stateCopy.isDeleteFilmShow = false;
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

export let openAddForm = () => {
    return (dispatch) => {
        dispatch(showAddForm());
        dispatch(hideEditForm());
        dispatch(hideDeleteFilm());
        dispatch(hideLogin());
        dispatch(hideSuccessAction());
        dispatch(hideErrorAction());
    }
}

export let closeAddForm = () => {
    return (dispatch) => {
        dispatch(hideAddForm());
    }
}

export let showEditForm = () => ({
    type: EDIT_FORM_SHOW
}) 

export let hideEditForm = () => ({
    type: EDIT_FORM_HIDE
})

export let openEditForm = () => {
    return (dispatch) => {
        dispatch(showEditForm());
        dispatch(hideAddForm());
        dispatch(hideDeleteFilm());
        dispatch(hideLogin());
        dispatch(hideSuccessAction());
        dispatch(hideErrorAction());
    }
}

export let closeEditForm = () => {
    return (dispatch) => {
        dispatch(hideEditForm());
    }
}

export let showDeleteFilm = () => ({
    type: DELETE_FILM_SHOW
})

export let hideDeleteFilm = () => ({
    type: DELETE_FILM_HIDE
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

export let showErrorAction = () => ({
    type: ERROR_ACTION_SHOW
})

export let hideErrorAction = () => ({
    type: ERROR_ACTION_HIDE
})

export let changeFilmInfo = (filmInfo) => ({
    type: CHANGE_FILM_INFO,
    filmInfo
})
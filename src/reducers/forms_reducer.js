import _ from "lodash";

const ADD_FORM_SHOW = "ADD_FORM_SHOW";
const ADD_FORM_HIDE = "ADD_FORM_HIDE";
const DELETE_FILM_SHOW = "DELETE_FILM_SHOW";
const DELETE_FILM_HIDE = "DELETE_FILM_HIDE";
const LOGIN_SHOW = "LOGIN_SHOW";
const LOGIN_HIDE = "LOGIN_HIDE";
const SUCCESS_SHOW = "SUCCESS_SHOW";
const SUCCESS_HIDE = "SUCCESS_HIDE";

const init_state = {
    isAddFormShow: false,
    isDeleteFilmShow: false,
    isLoginShow: false,
    isSuccessShow: false
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
        case SUCCESS_SHOW:
            stateCopy.isSuccessShow = true;
            break;
        case SUCCESS_HIDE:
            stateCopy.isSuccessShow = false;
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
        dispatch(hideDeleteFilm());
        dispatch(hideLogin());
        dispatch(hideSuccess());
    }
}

export let closeAddForm = () => {
    return (dispatch) => {
        dispatch(hideAddForm());
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

export let showSuccess = () => ({
    type: SUCCESS_SHOW
})

export let hideSuccess = () => ({
    type: SUCCESS_HIDE
})
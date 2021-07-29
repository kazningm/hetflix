import _ from "lodash";

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
    filmInfo: {},
    isDeleteFilmShow: false,
    isLoginShow: false,
    isSuccessActionShow: false,
    isErrorActionShow: false
}

const forms_reducer = (state=init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    switch (action.type) {
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
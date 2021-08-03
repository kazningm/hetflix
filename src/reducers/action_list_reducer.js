import _ from "lodash";

const CHANGE_PLACE = "CHANGE_PLACE"; 
const CHANGE_FILM_ID = "CHANGE_FILM_ID";
const SHOW_ACTION_LIST = "SHOW_ACTION_LIST";
const HIDE_ACTION_LIST = "CLOSE_ACTION_LIST"; 

const init_state = {
    isActionListShow: false,
    film_id: 272,
    top: 0,
    left: 0
}

const action_list_reducer = (state=init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    switch (action.type) {
        case CHANGE_PLACE:
            stateCopy.top = action.top;
            stateCopy.left = action.left;
            break;
        case CHANGE_FILM_ID:
            stateCopy.film_id = action.film_id;
            break;
        case SHOW_ACTION_LIST:
            stateCopy.isActionListShow = true;
            break;
        case HIDE_ACTION_LIST:
            stateCopy.isActionListShow = false;
            break;
        default:
            return stateCopy;
    }

    return stateCopy;
}

export default action_list_reducer;

////////// ACTIONS //////////////////////////////////////////////////

export let changePlace = (top, left) => ({
    type: CHANGE_PLACE,
    top,
    left
})

export let changeFilmId = (film_id) => ({
    type: CHANGE_FILM_ID,
    film_id
})

export let showActionList = (top, left) => ({
    type: SHOW_ACTION_LIST
})

export let openActionList = (top, left) => {
    return (dispatch) => {
        dispatch(showActionList());
        dispatch(changePlace(top, left));
    }
}

export let hideActionList = () => ({
    type: HIDE_ACTION_LIST
})
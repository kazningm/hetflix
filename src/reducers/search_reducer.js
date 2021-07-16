import _ from "lodash";

const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

let init_state = {
    search_value: "",
    placeholder: "What do you want to watch?"
}

const search_reducer = (state=init_state, action) => {
    let stateCopy = _.cloneDeep(state);

    if (action.type === CHANGE_SEARCH_VALUE) {
        stateCopy.search_value = action.value;
    }

    return stateCopy;
}

export default search_reducer;


// ACTIONS
export const changeSearchValue = (value) => ({
    type: CHANGE_SEARCH_VALUE,
    value
})
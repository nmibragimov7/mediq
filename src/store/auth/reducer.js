import {CHANGE_USER_REDUCER} from "./actions";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
}


const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case CHANGE_USER_REDUCER:
            return {
                ...state,
                [payload.key]: payload.data
            }
        default:
            return state
    }
}


export default reducer

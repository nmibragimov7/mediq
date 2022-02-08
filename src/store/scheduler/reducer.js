import {SAVE_DATA} from "./actions"

const initialState = {
    scheduler: []
}


const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SAVE_DATA:
            console.log(payload.data)
            return {
                ...state,
                [payload.key]: payload.data
            }
        default:
            return state
    }
}


export default reducer

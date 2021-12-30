import {SET_SELECTED_DOCTOR} from "./actions"

const initialState = {
    doctors: [
        {
            id: 1,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-1",
            available: true,
            online: false
        },
        {
            id: 2,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-2",
            available: true,
            online: true
        },
        {
            id: 3,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-1",
            available: true,
            online: false
        },
        {
            id: 4,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-2",
            available: true,
            online: false
        },
        {
            id: 5,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-1",
            available: true,
            online: true
        },
        {
            id: 6,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-2",
            available: true,
            online: false
        },
        {
            id: 7,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-1",
            available: true,
            online: true
        },
        {
            id: 8,
            name: "Кайратов Б.П.",
            position: "Терапевт",
            avatar: "avatar-3",
            available: false,
            online: false
        },
    ],
    selectedDoctor: null
}


const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_SELECTED_DOCTOR:
            return {
                ...state,
                [payload.key]: payload.data
            }
        default:
            return state
    }
}


export default reducer

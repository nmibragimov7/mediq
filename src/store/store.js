import {combineReducers, createStore} from "redux";
import userReducer from "./auth/reducer";
import recordsReducer from "./records/reducer";
import doctorsReducer from "./doctors/reducer";

const rootReducer = combineReducers({
    users: userReducer,
    records: recordsReducer,
    doctors: doctorsReducer
})


const store = createStore(rootReducer)


store.subscribe(() => {
    const user = store.getState().users.user
    localStorage.setItem("user", JSON.stringify(user))
})

export default store

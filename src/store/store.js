import {combineReducers, createStore} from "redux";
import userReducer from "./auth/reducer";
import recordsReducer from "./records/reducer";
import doctorsReducer from "./doctors/reducer";
import analyzesReducer from "./analyzes/reducer";
import schedulerReducer from "./scheduler/reducer";

const rootReducer = combineReducers({
    users: userReducer,
    records: recordsReducer,
    doctors: doctorsReducer,
    analyzes: analyzesReducer,
    scheduler: schedulerReducer
})


const store = createStore(rootReducer)


store.subscribe(() => {
    const user = store.getState().users.user
    localStorage.setItem("user", JSON.stringify(user))
})

export default store

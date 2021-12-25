import {combineReducers, createStore} from "redux";
import userReducer from "./auth/reducer";

const rootReducer = combineReducers({
    users: userReducer
})


const store = createStore(rootReducer)


store.subscribe(() => {
    const user = store.getState().users.user
    localStorage.setItem("user", JSON.stringify(user))
})

export default store

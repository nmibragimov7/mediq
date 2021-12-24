import {combineReducers, createStore} from "redux";
import userReducer from "./auth/reducer";

const rootReducer = combineReducers({
    users: userReducer
})


const store = createStore(rootReducer)



export default store

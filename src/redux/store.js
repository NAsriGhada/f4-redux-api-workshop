import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { userReduers } from "./reducers/UsersReducers";


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store=createStore(
    userReduers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { bookReducer } from "./reducers/bookReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    book:bookReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {TaskitState} from "./types";
import {BlogReducer} from "./blog/reducers";

const initialState : TaskitState = {
    blog: {
        isLoaded: false,
        isLoading: false,
        isCreating: false,
        items: []
    }
}

export const store = createStore(combineReducers<TaskitState>({
    blog: BlogReducer
}), initialState, composeWithDevTools(applyMiddleware(thunk)));
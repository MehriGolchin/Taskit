import {Reducer} from "redux";
import {
    Blog,
    BlogActionTypes, BlogState,
    CREATE_BLOG_FAILURE,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    GET_BLOG_FAILURE,
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS
} from "./types";

const initialState: BlogState = {
    isCreating: false,
    isLoading: false,
    isLoaded: false,
    items: []
};

export const BlogReducer: Reducer<BlogState, BlogActionTypes> = (state: BlogState = initialState, action: BlogActionTypes) => {
    switch (action.type) {
        // Get Blog
        case GET_BLOG_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            };
        case GET_BLOG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: action.payload
            };
        case GET_BLOG_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoaded: false,
                error: action.error
            };
            // Create Blog
        case CREATE_BLOG_REQUEST:
            return {
                ...state,
                isCreating: true,
                error: undefined
            };
        case CREATE_BLOG_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                isCreating: false
            };
        case CREATE_BLOG_FAILURE:
            return {
                ...state,
                isCreating: false,
                error: action.error
            };
    }
    return state;
}
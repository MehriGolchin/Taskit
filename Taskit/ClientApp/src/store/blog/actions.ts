import {Dispatch} from "redux";
import {get, post} from "../../services/HttpClient"
import {API_BASE_URI} from "../../constants";
import {
    Blog,
    BlogActionTypes,
    CREATE_BLOG_FAILURE,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    GET_BLOG_FAILURE,
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS
} from "./types";

export function createBlog(title: string, content: string, author: string, createDate: Date) {
    return async (dispatch: Dispatch<BlogActionTypes>) => {
        const url = new URL('blog', API_BASE_URI);
        try {
            dispatch({type: CREATE_BLOG_REQUEST});
            const blog = await post<Blog>(url, {title, content, author, createDate});
            dispatch({
                type: CREATE_BLOG_SUCCESS,
                payload: blog
            });
        } catch (error) {
            dispatch({
                type: CREATE_BLOG_FAILURE,
                error
            });
        }
    }
}

export function getBlog() {
    return async (dispatch: Dispatch<BlogActionTypes>) => {
        const url = new URL('blog', API_BASE_URI);
        try {
            dispatch({type: GET_BLOG_REQUEST});
            const blogs = await get<Blog[]>(url);
            dispatch({
                type: GET_BLOG_SUCCESS,
                payload: blogs
            });
        } catch (error) {
            dispatch({
                type: GET_BLOG_FAILURE,
                error
            });
        }
    }
}
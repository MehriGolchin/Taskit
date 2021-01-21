export interface ErrorCollection {
    [key: string]: string | string[]
}

export interface Blog {
    readonly BlogId: string;
    readonly Title: string;
    readonly Content: string;
    readonly Author: string;
    readonly CreateDate: Date;
}

export interface BlogState {
    items: Blog[];
    isCreating: boolean;
    isLoading: boolean;
    isLoaded: boolean;
    error?: ErrorCollection;
}

//
// actions
//

export const CREATE_BLOG_REQUEST = 'CREATE_BLOG_REQUEST';
export const CREATE_BLOG_SUCCESS = 'CREATE_BLOG_SUCCESS';
export const CREATE_BLOG_FAILURE = 'CREATE_BLOG_FAILURE';

export const GET_BLOG_REQUEST = 'GET_BLOG_REQUEST';
export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_FAILURE = 'GET_BLOG_FAILURE';

interface CreateBlogRequestAction {
    readonly type: typeof CREATE_BLOG_REQUEST;
}

interface CreateBlogSuccessAction {
    readonly type: typeof CREATE_BLOG_SUCCESS;
    readonly payload: Blog;
}

interface CreateBlogFailureAction {
    readonly type: typeof CREATE_BLOG_FAILURE;
    readonly error: ErrorCollection;
}

interface GetUserBlogsRequestAction {
    readonly type: typeof GET_BLOG_REQUEST;
}

interface GetUserBlogsSuccessAction {
    readonly type: typeof GET_BLOG_SUCCESS;
    readonly payload: Blog[];
}

interface GetUserBlogsFailureAction {
    readonly type: typeof GET_BLOG_FAILURE;
    readonly error: ErrorCollection;
}

export type BlogActionTypes =
    CreateBlogRequestAction |
    CreateBlogSuccessAction |
    CreateBlogFailureAction |
    GetUserBlogsRequestAction |
    GetUserBlogsSuccessAction |
    GetUserBlogsFailureAction;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlog} from "../store/blog/actions";
import {TaskitState} from "../store/types";

export const BlogList = (props: any) => {
    //const {blogs, handleDelete} = props;
    const {isLoaded, isLoading, items: blogs} = useSelector((s:TaskitState) => s.blog)
    const dispatch = useDispatch();
    
    useEffect(() => {
        (async () => {
            await dispatch(getBlog());
        })();
    }, [dispatch]);

    const handleDelete = (id: number) => { }
    
    return (
        <>
            {blogs.map((blog: any) => (
                <div className="card blog-wrapper" key={blog.id}>
                    <h5 className="card-header">{blog.title}</h5>
                    <div className="card-body">
                        <h6 className="card-title">{blog.author}</h6>
                        <p className="card-text">{blog.content.substring(0, 200) + '...'}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>&nbsp;
                        <button className="btn btn-primary" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    );
}
import React, {useState, useEffect} from "react";
import {BlogList} from "./BlogList";

export const Blog = () => {
    
    const handleNewBlog = () => {
        console.log('test...');
    }
    
    const handleDelete = (id: number) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
 
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'title 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar est velit, id convallis felis vestibulum sed. Etiam euismod sem id arcu fringilla, mollis iaculis sem vestibulum. Aliquam erat volutpat. Integer fringilla auctor iaculis. Phasellus odio ligula, congue nec rutrum ut, sodales et magna. Mauris euismod laoreet facilisis. Ut eget quam eget nibh ornare tempor at varius lectus. Proin sit amet aliquam velit. Fusce tempus odio eu condimentum accumsan. Morbi eu varius dui. Nunc vel fermentum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in diam quis tellus pulvinar finibus at non risus. Sed quis nisi bibendum, vestibulum nibh id, condimentum nisl.',
            author: 'mehri',
            createDate: ''
        },
        {
            id: 2,
            title: 'title 2',
            content: 'Donec lobortis, leo a laoreet mattis, enim felis porttitor elit, non aliquam felis massa non nisi. Mauris varius, ex vel laoreet elementum, orci ante finibus tortor, eu pharetra dui nisi sed ante. Quisque viverra, libero sed malesuada hendrerit, lorem velit auctor leo, non volutpat lorem risus eu dui. Duis porttitor odio velit, vitae tempor felis blandit non. Sed sed viverra tellus. Aliquam nec ex iaculis, bibendum justo nec, lobortis lorem. Vestibulum a odio sapien.',
            author: 'mehri',
            createDate: ''
        },
        {
            id: 3,
            title: 'title 3',
            content: 'Proin ligula velit, lobortis vitae sollicitudin sit amet, luctus sit amet tortor. Sed et mauris vitae ipsum ullamcorper gravida nec nec magna. Sed fermentum maximus lectus et gravida. Sed vitae tortor at enim aliquam maximus id nec nibh. Aenean rutrum mauris at dignissim fermentum. Mauris dictum nunc sit amet efficitur vestibulum. Duis at felis in mauris laoreet malesuada eu at quam. Aenean vehicula consequat orci, vel accumsan eros semper congue. Donec facilisis, nisi nec gravida semper, magna mauris pulvinar augue, sed accumsan nisi eros non justo. Nam nec euismod ex. Quisque in lorem vitae ipsum iaculis accumsan non quis ante.',
            author: 'mehri',
            createDate: ''
        }
    ]);

    useEffect(() => {
        console.log('use effect...');
    }, [blogs]);
    
    return(
        <div className="container">
            <button className="btn btn-success" onClick={handleNewBlog}>New Blog</button>
            <BlogList blogs={blogs} handleDelete={handleDelete} />
        </div>
    );
}
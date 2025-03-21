import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const PostsList = () => {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/getposts')
        .then(response => {setPosts(response.data)})
    },[]);

    const handleDelete=async(id) => {
        try {
            await axios.delete(`http://localhost:3001/deleteposts/${id}`)
            setPosts(posts.filter(post=> post.id!==id))
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div className="container mt-5">
            <h2>Posts List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post)=>(
                        <tr key={post.id}>
                            <td> {post.id} </td>
                            <td> {post.title} </td>
                            <td> {post.body} </td>
                            <td>
                                <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
                                <button onClick={()=>handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PostsList;
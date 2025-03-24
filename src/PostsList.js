import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap"; // Bootstrap Spinner

const API_URL = "https://react-mysql-curd-server.onrender.com";

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // ✅ Loading state added

    useEffect(() => {
        console.log("API URL:", API_URL);
        axios.get(`${API_URL}/getposts`)
            .then(response => {
                setPosts(response.data);
                setLoading(false); // ✅ Data loaded
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false); // ✅ Stop loading on error
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/deleteposts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Posts List</h2>

            {/* Show Loading Spinner Until Data Loads */}
            {loading ? (
                <p><Spinner animation="border" size="sm" /> Fetching data...</p>
            ) : posts.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post,index) => (
                            <tr key={post.id}>
                                <td>{index+1}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
                                    <button onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Posts Available</p>
            )}
        </div>
    );
};

export default PostsList;

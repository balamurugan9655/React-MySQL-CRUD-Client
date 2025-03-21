import React ,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const API_URL = "https://react-mysql-curd-server.onrender.com";

const EditPost = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchPost=async()=>{
            try {
                const res = await axios.get(`${API_URL}/getpost/${id}`)
                setTitle(res.data[0].title)
                setBody(res.data[0].body)
            } catch (err) {
                console.log(err)
            }
        };
        fetchPost();
    },[id]);

    const handleSubmit=async(e)=> {
        e.preventDefault();
        try{
            await axios.put(`${API_URL}/updatepost/${id}`,{title,body})
            navigate("/");
            console.log("update frontend...")
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Edit Post</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body">Body</label>
                                    <textarea
                                        className="form-control"
                                        id="body"
                                        rows="5"
                                        placeholder="Enter body"
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Update Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPost;
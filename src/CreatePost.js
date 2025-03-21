import axios from "axios";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Container, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {

    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const navigate=useNavigate();

    // data inserted..
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/addpost',{title,body})
        .then((response)=>{
            console.log(response.data)
            navigate('/');
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <Container className="mt-5">
            <h1>This is Create Post</h1>
            <Container className="row justify-content-center">
                <Container className="col-md-8">
                    <Card>
                        <CardHeader>
                            <h3>Create a New Post</h3>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <FormLabel> title </FormLabel>
                                    <FormControl type="text" placeholder="Enter The Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Body</FormLabel>
                                    <textarea className="form-control" placeholder="Enter The Body" value={body} onChange={(e)=>setBody(e.target.value)}/>
                                </FormGroup>
                                <Button type="submit" variant="outline-primary">Create Post</Button>
                            </form>
                        </CardBody>
                    </Card>
                </Container>
            </Container>
        </Container>
    )
}

export default CreatePost;
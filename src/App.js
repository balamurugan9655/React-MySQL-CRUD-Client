import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import NavigationBar from "./NavBar";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import PostsList from "./PostsList";
import { Container } from "react-bootstrap";

const App = () => {
    return(
        <Router>
            <Container fluid>
                <NavigationBar/>
                <Container>
                    <Routes>
                        <Route path="/" element={<PostsList/>}/>
                        <Route path="/create" element={<CreatePost/>}/>
                        <Route path="/edit/:id" element={<EditPost/>}/>
                    </Routes>
                </Container>
            </Container>
        </Router>
    )
}

export default App;
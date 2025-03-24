import React from "react";
import {Navbar,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar=()=>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/React-MySQL-CRUD-Client">CRUD APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                     <Nav.Link>CreatePost</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="/edit/:id">
                     <Nav.Link>EditPost</Nav.Link>
                    </LinkContainer> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavigationBar;
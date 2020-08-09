import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import {Navbar, Nav,Button,Form,FormControl,Link} from 'react-bootstrap';
import logo from './logo.svg';
//import { Button } from 'react-bootstrap';

class Navigation extends Component{
    render(){
        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          </div>
        );
    }
}
export default Navigation;

import React, { Component } from 'react'
import {
    
    Navbar, Nav, Form, FormControl, Button
  } from 'react-bootstrap';
import logo from './../images/logo.png'
import carticon from './../images/shopping-cart.svg'

class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
<Navbar sticky="top" bg="light" variant="light" className="bg-light justify-content-between">
          <Navbar.Brand href="#home" >
            <img src={logo} width={100}></img>
          </Navbar.Brand>
          <Nav className="bg-light justify-content-between" >
            <Nav.Link href="#home" > <h1> Fish Exclusive</h1></Nav.Link>
          </Nav>
          <Form inline>

            <Button variant="warning"><img src={carticon} width={30}></img>{this.state.cartqty}</Button>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
       

        );
    }
}
 
export default Header;
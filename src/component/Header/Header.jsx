import React, { Component, useContext } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "./../images/logo.png";
import carticon from "./../images/shopping-cart.svg";
import { CartContext } from "./../../Context/CartContext";

const Header = (props) => {
  const [Cart, setCart] = useContext(CartContext);

  const addToCart = (e) => {
    //e.preventDefault();
    setCart((previousState) => [...previousState, { id: 1, qty: 5 }]);
  };
  return (
    <Navbar
      sticky="top"
      bg="light"
      variant="light"
      className="bg-light justify-content-between"
    >
      <Navbar.Brand href="#home">
        <img src={logo} width={100} alt="Fish Logo"></img>
      </Navbar.Brand>
      <Nav className="bg-light justify-content-between">
        <Nav.Link href="#home">
          {" "}
          <h1> Fish Exclusive</h1>
        </Nav.Link>
      </Nav>
      <Form inline>
        <Button variant="warning">
          <img alt="Cart Icon" src={carticon} width={30}></img>
          {Cart.length}
        </Button>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary" onClick={addToCart}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default Header;

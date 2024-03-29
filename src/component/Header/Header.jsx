import React, { Component, useContext } from "react";
import { Navbar, Nav, Form, Button, Badge } from "react-bootstrap";
import logo from "./../images/logo.png";
import carticon from "./../images/shopping-cart.svg";
import { CartContext } from "./../../Context/CartContext";
import CartPage from "./../Cart/Cart";
import Confirmation from "./../Checkout/ConfirmCart";
const Header = (props) => {
  const [
    Cart,
    setCart,
    addToCart,
    removeFromCart,
    CartShow,
    setCartShow,
  ] = useContext(CartContext);

  return (
    <React.Fragment>
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
            <h1> Fishclusive</h1>
          </Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-warning" onClick={() => setCartShow(true)}>
            <img alt="Cart Icon" src={carticon} width={30}></img>
            <Badge variant="light">{Cart.length}</Badge>
          </Button>
        </Form>
      </Navbar>
      <CartPage></CartPage>
      <Confirmation></Confirmation>
    </React.Fragment>
  );
};

export default Header;

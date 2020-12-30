import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Modal,
  Card,
  ListGroup,
  CardColumns,
  blockquote,
} from "react-bootstrap";
import { CartContext } from "./../../Context/CartContext";
const Cart = (props) => {
  const [
    Cart,
    setCart,
    addToCart,
    removeFromCart,
    CartShow,
    setCartShow,
  ] = useContext(CartContext);
  console.log("----Default -Value of modal.----", CartShow);
  console.log("----Default -Value of Cart.----", Cart);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={CartShow}
    >
      <Modal.Body>
        <h4>Shopping Cart</h4>
        <p>
          <ListGroup variant="flush">
            {Cart.length
              ? Cart.map((Ca, i) => (
                  <ListGroup.Item>
                    {" "}
                    <li>{Ca.product.id}</li>
                    {Ca.product.name},{Ca.product.description}{" "}
                  </ListGroup.Item>
                ))
              : null}
          </ListGroup>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setCartShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Cart;

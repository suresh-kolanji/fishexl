import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Modal,
  Card,
  ListGroup,
  CardColumns,
  Row,
  Col,
  Container,
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
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Shopping Cart</h4>
        </Modal.Title>
        <button type="button" onClick={() => setCartShow(false)} class="close">
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <p>
          <ListGroup variant="flush">
            {Cart.length
              ? Cart.map((Ca, i) => (
                  <ListGroup.Item>
                    <Container fluid>
                      <Row>
                        <Col> {i + 1}</Col>
                        <Col>{Ca.product.name}</Col>
                        <Col>{Ca.product.description}</Col>
                        <Col>{Ca.product.constprice}</Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                ))
              : null}
            <ListGroup.Item>
              <Container fluid>
                <Row>
                  <Col>
                    <Button outline-primary onClick={() => setCartShow(false)}>
                      checkout
                    </Button>
                  </Col>
                  <Col md={{ span: 3, offset: 3 }}>
                    {Cart.map((datum) => datum.product.constprice).reduce(
                      (a, b) => a + b,
                      0
                    )}
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </p>
      </Modal.Body>
    </Modal>
  );
};
export default Cart;

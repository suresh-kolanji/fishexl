import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Modal,
  Card,
  ListGroup,
  Badge,
  Row,
  Col,
  Container,
  blockquote,
} from "react-bootstrap";
import { CartContext } from "./../../Context/CartContext";
import delicon from "./../images/delete.svg";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [
    Cart,
    setCart,
    addToCart,
    removefromcart,
    CartShow,
    setCartShow,
    submitcart,
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
        <button
          type="button"
          onClick={() => setCartShow(false)}
          className="close"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
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
                        <Col>
                          <Button
                            variant="outline-danger"
                            onClick={removefromcart.bind(this, Ca.product)}
                            removefromcart
                          >
                            <img alt="Cart Icon" src={delicon} width={15}></img>
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                ))
              : null}
            <ListGroup.Item>
              <Container fluid>
                <Row>
                  <Col>
                    <Badge variant="info" onClick={() => setCartShow(false)}>
                      Total
                    </Badge>
                  </Col>
                  <Col md={{ span: 3, offset: 3 }}>
                    <Badge pill variant="info">
                      {Cart.map((datum) => datum.product.constprice).reduce(
                        (a, b) => a + b,
                        0
                      )}
                    </Badge>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          </ListGroup>
          <Checkout></Checkout>
        </p>
      </Modal.Body>
    </Modal>
  );
};
export default Cart;

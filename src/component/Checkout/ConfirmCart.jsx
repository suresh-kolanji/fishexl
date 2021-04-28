import React, { useEffect, useState, useContext } from "react";
import { Modal, ListGroup, Badge, Row, Col, Container } from "react-bootstrap";
import { CartContext } from "./../../Context/CartContext";

const ConfirmCart = (props) => {
  const [
    Cart,
    setCart,
    addToCart,
    removefromcart,
    CartShow,
    setCartShow,
    submitcart,
    Checkout,
    setCheckout,
    ConfirmCartShow,
    setConfirmCartShow,
  ] = useContext(CartContext);
  console.log("------------ConfirmCartShow---------", ConfirmCartShow);
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={ConfirmCartShow}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Order Confirmation</h4>
        </Modal.Title>
        <button
          type="button"
          className="close"
          onClick={() => setConfirmCartShow(false)}
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Container fluid>
                <Row>
                  <Col>
                    <Badge variant="info">Total</Badge>
                  </Col>
                  <Col md={{ span: 3, offset: 3 }}>
                    <Badge pill variant="info">
                      100
                    </Badge>
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
export default ConfirmCart;

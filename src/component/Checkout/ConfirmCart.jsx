import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  Button,
  ListGroup,
  Badge,
  Row,
  Col,
  Container,
  Card,
  CardDeck,
  Table,
  Alert,
} from "react-bootstrap";
import { CartContext } from "./../../Context/CartContext";
import delicon from "./../images/delete.svg";
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
    OrderDetail,
    resetCart,
    setOrderDetail,
  ] = useContext(CartContext);
  console.log("cart page data --------happy---------- ", OrderDetail);
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
          onClick={() => setConfirmCartShow(false)}
          className="close"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {OrderDetail.map((d) => (
            <ListGroup variant="flush">
              {d.OrderItems.map((e, i) => (
                <ListGroup.Item>
                  <Container fluid>
                    <Row>
                      <Col> {i + 1}</Col>
                      <Col>{e.ItemName}</Col>
                      <Col>{e.ItemDesc}</Col>
                      <Col>{e.ItemPrice}</Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              ))}

              <Alert variant="success">
                <Container fluid>
                  <Row>
                    <Col>
                      <Row>
                        <Col>{d.Name}</Col>
                      </Row>
                      <Row>
                        <Col>{d.PhoneNo}</Col>
                      </Row>
                      <Row>
                        <Col>{d.Email}</Col>
                      </Row>
                      <Row>
                        <Col>{d.Address1}</Col>
                      </Row>
                      <Row>
                        <Col>{d.Address2}</Col>
                      </Row>
                      <Row>
                        <Col>{d.City}</Col>
                      </Row>
                      <Row>
                        <Col>{d.State}</Col>
                      </Row>
                      <Row>
                        <Col>{d.PostalCode}</Col>
                      </Row>
                    </Col>

                    <Col>
                      <Row>
                        <Col>Order ID : {d.ID}</Col>
                      </Row>
                      <Row>
                        <Col>Order Total:{d.TotalPrice}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Alert>
            </ListGroup>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};
export default ConfirmCart;

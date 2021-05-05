import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./../../Context/CartContext";
import { Form, Button, Col } from "react-bootstrap";

export const Checkout = (props) => {
  const [
    Cart,
    setCart,
    addToCart,
    removefromcart,
    CartShow,
    setCartShow,
    Submitcart,
    Checkout,
    setCheckout,
  ] = useContext(CartContext);

  const handleChange = (e) => {
    console.log(e.target.value);

    setCheckout({
      ...Checkout,
      [e.target.name]: e.target.value.trim(),
    });
  };
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="username"
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address 1</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address1"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            name="address2"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            placeholder="Phone Number"
            name="phNumber"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name="city" onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="State"
              name="state"
              placeholder="Tamil Nadu"
              readOnly
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control name="zipCode" onChange={handleChange} />
          </Form.Group>
        </Form.Row>

        <Button
          variant="primary"
          // type="submit"
          onClick={Submitcart.bind(this, "m,n")}
          submitcart
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Checkout;

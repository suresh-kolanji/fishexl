import React, { useEffect, useState, useContext } from "react";
import { Button, Card, CardColumns, blockquote } from "react-bootstrap";
import img5 from "././5.jpg";
import axios from "axios";
import { CartContext } from "./../../Context/CartContext";
const ProductList = (props) => {
  //ProductList.contextType = CartContext;
  const [Cart, setCart] = useContext(CartContext);
  const [Productlist, setProductlist] = useState([]);
  const addToCart = (e) => {
    //e.preventDefault();
    setCart((previousState) => [...previousState, { id: 1, qty: 5 }]);
  };
  useEffect(() => {
    axios
      .get("https://fishserv.herokuapp.com/productlist")
      .then((res) => {
        console.log(res);
        setProductlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Hook called");
  }, []);

  return (
    <CardColumns>
      {Productlist.length
        ? Productlist.map((product) => (
            <Card sm="auto">
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <blockquote className="blockquote mb-0 card-body">
                  <small className="text-muted">
                    kg{" "}
                    <cite title="Source Title">
                      {product.constprice} &#x20B9;
                    </cite>
                  </small>
                </blockquote>
                <Button variant="warning" onClick={addToCart}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))
        : null}
    </CardColumns>
  );
};

export default ProductList;

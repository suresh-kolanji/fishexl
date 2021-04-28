import React, { useEffect, useState, useContext } from "react";
import { Button, Card, CardColumns, blockquote } from "react-bootstrap";
import img5 from "././5.jpg";
import axios from "axios";
import { CartContext } from "./../../Context/CartContext";
const ProductList = (props) => {
  const [Cart, setCart, addToCart] = useContext(CartContext);
  const [Productlist, setProductlist] = useState([]);

  useEffect(() => {
    axios
      .get("https://fishserv.herokuapp.com/productlist")
      .then((res) => {
        setProductlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CardColumns>
      {Productlist.length
        ? Productlist.map((product) => (
            <Card key={product.id}>
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
                <Button
                  variant="warning"
                  onClick={addToCart.bind(this, product)}
                >
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

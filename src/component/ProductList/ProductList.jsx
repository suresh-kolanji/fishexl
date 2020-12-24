import React, { Component } from 'react'
import {
  
      Button, Card, CardColumns, blockquote
} from 'react-bootstrap';
import img5 from '././5.jpg'

class ProductList extends Component {
    state = {
        loading: true,
        cartqty: 0,
        productlist: []
      };
    
      async componentDidMount() {
        const url = "https://fishserv.herokuapp.com/productlist";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ productlist: data, loading: false });
      }
    
    render() { 
        const { productlist } = this.state;
    
        return (  
<CardColumns>


{productlist.length
  ? productlist.map(product => (
    <Card sm="auto">
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <blockquote className="blockquote mb-0 card-body">
          <small className="text-muted">
            kg <cite title="Source Title">{product.constprice} &#x20B9;</cite>
          </small>
        </blockquote>
        <Button variant="warning"
          onClick={() => this.handleAddtoCart(product)}
        >Add to Cart</Button>
      </Card.Body>
    </Card>

  ))
  : null}

</CardColumns>


        );
    }
}
 
export default ProductList;
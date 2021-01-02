import React, { useContext } from "react";
import ProductList from "./component/ProductList/ProductList";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { CartProvider, CartContext } from "./Context/CartContext"
import CartPage from "./component/Cart/Cart";
import Banner from "./component/Banner/Banner";
import './App.css';
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

const App = (props) => {
  return (
    <div className="App" >
      <Container>
        <CartProvider>
          <Header ></Header>
          <Banner></Banner>
          <br></br>
          <ProductList></ProductList>
          <Footer></Footer>
        </CartProvider>
      </Container>
    </div >

  );
}

export default App;
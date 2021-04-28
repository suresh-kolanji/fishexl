import React from "react";
import ProductList from "./component/ProductList/ProductList";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { CartProvider } from "./Context/CartContext"

import Banner from "./component/Banner/Banner";
import './App.css';
import {
  Container
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
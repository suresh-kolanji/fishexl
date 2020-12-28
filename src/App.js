import React from "react";
import ProductList from "./component/ProductList/ProductList";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { CartProvider } from "./Context/CartContext"

import './App.css';

const App = (props) => {
  return (
    <div className="App" >
      <CartProvider>
        <Header ></Header>
        <ProductList></ProductList>
        <Footer></Footer>
      </CartProvider>
    </div >

  );
}

export default App;
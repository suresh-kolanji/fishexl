import React, { useContext } from "react";
import ProductList from "./component/ProductList/ProductList";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { CartProvider, CartContext } from "./Context/CartContext"
import CartPage from "./component/Cart/Cart";
import './App.css';

const App = (props) => {
  return (
    <div className="App" >
      <CartProvider>
        <Header ></Header>
        <ProductList></ProductList>
        <Footer></Footer>
        <CartPage></CartPage>
      </CartProvider>
    </div >

  );
}

export default App;
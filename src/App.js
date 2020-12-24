import React, { Component } from "react";
import ProductList from "./component/ProductList/ProductList";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";



import './App.css';

class App extends Component {

  state = {
    loading: true,
    cartqty: 0,
    productlist: []
  };

  handleAddtoCart = product => {
    console.log(product)
    const nqty = this.state.cartqty + product.id;
    this.setState({ cartqty: nqty });

  };


  render() {

    return (
      <div className="App" >
        <Header></Header>
        <ProductList></ProductList>
        <Footer></Footer>

      </div >

    );
  }

}
export default App;
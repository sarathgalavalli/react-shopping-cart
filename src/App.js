import React from "react";
import data from "./data.json"
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: [],

    }
    this.onFilerChange = this.onFilerChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    // this.onAddToCart = this.onAddToCart.bind(this);

  }
  onFilerChange(event) {
    this.setState((state) => ({
      sort: event.target.value,
      products: this.state.products.slice().sort((a, b) => (
        event.target.value === "Lowest" ?
          ((a.price > b.price) ? 1 : -1) :
          event.target.value === "Highest" ?
            ((a.price < b.price) ? 1 : -1) :
            (a.id < b.id) ? 1 : -1
      ))
    })
    )
  }

  onSizeChange = (event) => {
    this.setState({
      size: event.target.value,
      products: data.products.filter(product => product.availableizes.indexOf(event.target.value) >= 0),
    })
  }

  onAddToCart = (product) => {
    const cartItems = this.state.cartItems.slice()
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }

    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  }
  render() {
    return (
      <div className="grid-container">
        <header >
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter length={this.state.products.length} sort={this.state.sort} size={this.state.size} onFilerChange={this.onFilerChange} onSizeChange={this.onSizeChange}></Filter>
              <Products products={this.state.products} onAddToCart={this.onAddToCart}></Products>

            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} />
            </div>
          </div>
        </main>
        <footer>
          All Rights Reserved
      </footer>
      </div >
    );
  }
}

export default App;

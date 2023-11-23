import React, { Component } from "react";
import { shoesArr } from "./data";
import List from "./List";
import Cart from "./Cart";

export default class Ex_Shoes extends Component {
  state = {
    listShoes: shoesArr,
    cart: [],
  };
  handleAddToCart = (item) => {
    let cloneCart = [...this.state.cart];
    // nếu chưa có thì push vào card với soLuong: 1
    let index = cloneCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      cloneCart.push({ ...item, soLuong: 1 });
    } else {
      // nếu có rồi thì tăng soLuong ++
      cloneCart[index].soLuong++;
    }
    this.setState({ cart: cloneCart });
  };
  handleDelete = (id) => {
    let cloneCart = [...this.state.cart];
    cloneCart = cloneCart.filter((item) => item.id !== id);
    this.setState({ cart: cloneCart });
  };
  handlePlusItem = (id) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((cartItem) => cartItem.id === id);
    cloneCart[index].soLuong++;
    this.setState({ cart: cloneCart });
  };
  handleMinusItem = (id) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((cartItem) => cartItem.id === id);
    if (cloneCart[index].soLuong > 1) {
      cloneCart[index].soLuong--;
    } else {
      cloneCart = cloneCart.filter((item) => item.id !== id);
    }
    this.setState({ cart: cloneCart });
  };
  render() {
    return (
      <div className="row mx-2">
        <List
          data={this.state.listShoes}
          handleAddToCart={this.handleAddToCart}
        />
        <Cart
          data={this.state.cart}
          handleDelete={this.handleDelete}
          handlePlusItem={this.handlePlusItem}
          handleMinusItem={this.handleMinusItem}
        />
      </div>
    );
  }
}

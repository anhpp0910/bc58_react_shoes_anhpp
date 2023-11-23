import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card col-6 mb-5 p-0" style={{ width: "19rem" }}>
        <img
          src={this.props.data.image}
          className="card-img-top m-auto"
          style={{ width: "15rem" }}
        />
        <div className="card-body pt-0">
          <h5 className="card-title">{this.props.data.name}</h5>
          <p className="card-text">{this.props.data.description}</p>
        </div>
        <div class="card-footer p-3">
          <p className="card-subtitle mb-2 text-body-secondary">
            <span>$</span>
            {this.props.data.price}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.handleAddToCart(this.props.data);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

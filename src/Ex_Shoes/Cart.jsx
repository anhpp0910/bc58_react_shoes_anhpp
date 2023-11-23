import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div className="col-6">
        <h1 className="my-4">Cart</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item) => {
              return (
                <tr style={{ verticalAlign: "middle" }}>
                  <td>
                    <img src={item.image} style={{ width: "50px" }} />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => {
                        this.props.handleMinusItem(item.id);
                      }}
                    >
                      <i class="fa fa-minus-circle"></i>
                    </button>
                    {item.soLuong}
                    <button
                      className="btn"
                      onClick={() => {
                        this.props.handlePlusItem(item.id);
                      }}
                    >
                      <i class="fa fa-plus-circle"></i>
                    </button>
                  </td>
                  <td>
                    <span>$</span>
                    {item.price * item.soLuong}
                  </td>
                  <td>
                    <button
                      className="btn text-danger"
                      onClick={() => {
                        this.props.handleDelete(item.id);
                      }}
                    >
                      <i class="fa fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

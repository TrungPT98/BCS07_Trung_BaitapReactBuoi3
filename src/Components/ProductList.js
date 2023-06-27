import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    let { item } = this.props;
    // console.log(this.props);
    return (
      <div className="border mb-3 p-4">
        <img className="img-fluid" src={item.image} alt="shoes" />
        <h3 className="fs-5">
          <button
            className="border-0 bg-white"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              this.props.xemChiTiet(item);
            }}
          >
            {item.name}
          </button>
        </h3>
        <p className="fs-5">${item.price}.00</p>

        <button type="button" className="btn btn-dark me-3">
          add to carts
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";
import ProductList from "./ProductList";
import { shoesArr } from "./DataShoes";

export default class ShoeShop extends Component {
    state = {
        shoeItem: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }
    };
    xemChiTietSanPham = (item) => {
        this.setState({
            shoeItem: item,
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center fs-1 pt-3">Shoes Shop</h1>
                <div className="container mt-5">
                    <div className="row">
                        {shoesArr.map((item, index) => {
                            return (
                                <div className="col-4" key={index}>
                                    <ProductList xemChiTiet={this.xemChiTietSanPham} item={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    {this.state.shoeItem.name}
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <img src={this.state.shoeItem.image} alt="shoes" className="img-fluid"/>
                                <p>{this.state.shoeItem.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

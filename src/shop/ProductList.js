import React, { Component } from "react";

class ProductList extends React.Component {
    render() {
        if (this.props.products == null || this.products.length === 0) {
            return <div className="p-2">No Products</div>
        }
        return (
            this.props.products.map(p =>
                <div className="card m-1 p-1 bg-light" key={p.id}>
                    <h4>
                        {p.name}
                        <span className="badge badge-pill badge-primary float-right">
                            ${p.price.toFixed(2)}

                        </span>
                    </h4>
                    <div className="card-text bg-white p-1">
                        {p.description}

                    </div>

                </div>
            )
        )
    }
}
export default ProductList;
import React from "react";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";

class Shop extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-dark text-white">
                        <div className="navbar-brand">
                            SPORTS STORE

                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-3 p2">
                        <CategoryNavigation baseUrl="/shop/products"
                            categories={this.props.categories} />
                    </div>
                    <div className="col-9 p-2">
                        <ProductList products={this.props.products} />
                    </div>

                </div>

            </div>
        )
    }
}
export default Shop;
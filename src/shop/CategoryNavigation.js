import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoryNavigation extends React.Component {
    render() {
        return (
            <>
                <Link className="btn btn-secondary btn-block "
                    to={this.props.baseUrl}>All</Link>
                {this.props.categories && this.props.categories.map(cat =>
                    <Link className="btn btn-secondary btn-block " key={cat}
                        to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>{cat}</Link>
                )}
            </>
        )
    }
}
export default CategoryNavigation;
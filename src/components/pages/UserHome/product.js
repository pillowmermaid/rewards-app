import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.getMinCost = this.getMinCost.bind(this);
  }
  
  // Loops through the product subtypes and returns the lowest price
  getMinCost() {
    const { product } = this.props;
    const minCost = product.types.reduce((min, i) => i.price < min ? i.price : min, product.types[0].price);  
    return minCost.toLocaleString();
  }

  render() {
    const { product } = this.props;
    const prodImgStyles = {
      backgroundImage: ``
    };
    return(
      <div className="product">
        <div className="product-image-container">
          <img src={`images/${product.types[0].img}`} />
        </div>
        <h2>{product.name}</h2>
        <p>Starting from {this.getMinCost()} points</p>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product;

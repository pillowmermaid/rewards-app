import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectProduct as selectProductAction,
  toggleModal as toggleModalAction
} from 'actions'

import './product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.getMinCost = this.getMinCost.bind(this);
    this.setSelectedProduct = this.setSelectedProduct.bind(this);
  }

  setSelectedProduct() {
    const { product, selectProduct, toggleModal } = this.props;
    selectProduct(product);
    toggleModal(true);
  }
  
  // Loops through the product subtypes and returns the lowest price
  getMinCost() {
    const { product } = this.props;
    const minCost = product.types.reduce((min, i) => i.price < min ? i.price : min, product.types[0].price);  
    return minCost.toLocaleString();
  }

  render() {
    const { product } = this.props;
    return(
      <div className="product" onClick={this.setSelectedProduct}>
        <div className="product-image-container">
          <img src={`images/${product.types[0].img}`} alt={product.name} />
        </div>
        <h2>{product.name}</h2>
        <p>Starting from {this.getMinCost()} points</p>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  selectProduct: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  selectProduct: data => dispatch(selectProductAction(data)),
  toggleModal: data => dispatch(toggleModalAction(data))
});

export default connect(undefined, mapDispatchToProps)(Product);

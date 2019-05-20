import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  toggleModal as toggleModalAction
} from 'actions'
 

import './modal.css';

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.goToCheckout = this.goToCheckout.bind(this);
    this.changeItemColor = this.changeItemColor.bind(this);
  }

  goToCheckout() {

  }

  changeItemColor() {

  }

  render() {
    const { isModalOpen, product, toggleModal } = this.props;
    return(
      <Fragment>
        { (isModalOpen && product) &&
          <div className="product-modal">
            <button onClick={() => toggleModal(false)}>x</button>
            <div className="product-image-container">
              <img src={`images/${product.types[0].img}`} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
          </div>
        }
        </Fragment>
    );
  }
}

ProductModal.propTypes = {
  history: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  product: PropTypes.object
};

const mapStateToProps = ({ application, user }) => ({
  isModalOpen: application.isModalOpen,
  product: user.selectedProduct
});

const mapDispatchToProps = dispatch => ({
  toggleModal: data => dispatch(toggleModalAction(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductModal));

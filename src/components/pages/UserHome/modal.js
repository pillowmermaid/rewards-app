import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  toggleModal as toggleModalAction,
  updatePoints as updatePointsAction
} from 'actions'
 

import './modal.css';

/* Ideally would refactor common modal logic into a HOC 
to keep this component cleaner*/

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIndex: 0,
      error: false
    }
    this.goToCheckout = this.goToCheckout.bind(this);
    this.changeItemColor = this.changeItemColor.bind(this);
  }

  goToCheckout() {
    const { colorIndex } = this.state;
    const { history, points, product, updatePoints, toggleModal } = this.props;
    const newPoints = points - product.types[colorIndex].price;
    if (newPoints >= 0) {
      toggleModal(false);
      updatePoints(newPoints);
      history.push('/success');
    } else {
      this.setState({ error: true });
    }
  }

  changeItemColor(index) {
    this.setState({ error: false });
    this.setState({ colorIndex: index });
  }

  render() {
    const { isModalOpen, product, toggleModal } = this.props;
    const { colorIndex, error } = this.state;
    const price = product && product.types[colorIndex].price.toLocaleString();
    return(
      <Fragment>
        { (isModalOpen && product) &&
          <div className="modal">
            <div className="modal-header">
              <button className="btn btn-close" onClick={() => toggleModal(false)}>x</button>
            </div>
            <div className="modal-content">
              <div className="flex-col">
                <img src={`images/${product.types[colorIndex].img}`} alt={product.name} />
                <div className="product-colors">
                  { product.types.map((type, i) => {
                    const colorSelectStyle = {
                      backgroundColor: type.color
                    }
                    return (
                      <button key={`color-select--${i}`} style={colorSelectStyle} className="color-select" onClick={() => this.changeItemColor(i)}></button>
                      )
                    }
                  )}
                </div>
              </div>
              <div className="flex-col">
                <h2>{product.name}</h2>
                <h3>{product.types[colorIndex].subName}</h3>
                <p><strong>{price}</strong><i> points</i></p>
                { error && 
                  <p class="error">Sorry, not enough points!</p> 
                }
                <button className="btn" onClick={this.goToCheckout}>Checkout</button>
              </div>    
            </div>
          </div>
        }
        </Fragment>
    );
  }
}

ProductModal.propTypes = {
  history: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  updatePoints: PropTypes.func.isRequired,
  product: PropTypes.object
};

const mapStateToProps = ({ application, user }) => ({
  isModalOpen: application.isModalOpen,
  product: user.selectedProduct,
  points: user.points
});

const mapDispatchToProps = dispatch => ({
  toggleModal: data => dispatch(toggleModalAction(data)),
  updatePoints: data => dispatch(updatePointsAction(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductModal));

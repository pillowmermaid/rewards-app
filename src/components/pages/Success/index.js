import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

const SuccessPage = ({ product, points }) => (
  <div className="page page--success">
      <h2>
        You've redeemed your { product.name }!
      </h2>
      <h3>
        You have <strong>{ points }</strong> points left.
      </h3>
      <Link to="/">Return to home page</Link>
  </div>
);

SuccessPage.propTypes = {
  points: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired
}

const mapStateToProps = ({ user }) => ({
  points: user.points.toLocaleString(),
  product: user.selectedProduct
});

export default connect(mapStateToProps)(SuccessPage);

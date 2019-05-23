import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from './product';
import ProductModal from './modal';

import './index.css';

const UserHome = ({ firstName, points, products }) => (
  <div className="page page--user-home">
      <ProductModal />
      <h2>
        Welcome { firstName }!
      </h2>
      <h3>
        You currently have <strong>{ points }</strong> points
      </h3>
      <div className="products-list">
        { products.map((prod, i) =>
          <Product key={`${prod.name}--item-${i}`} product={prod} />
        )}
      </div>
  </div>
);

UserHome.propTypes = {
  firstName: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
  products: PropTypes.array
}

UserHome.defaultProps = {
  products: []
}

const mapStateToProps = ({ user }) => ({
  firstName: user.firstName,
  points: user.points.toLocaleString(),
  products: user.products
});

export default connect(mapStateToProps)(UserHome);

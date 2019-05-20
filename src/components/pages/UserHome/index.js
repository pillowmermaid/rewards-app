import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from './product';
import ProductModal from './modal';

const UserHome = ({ firstName, points, products }) => (
  <div className="page page--user-home">
      <ProductModal />
      <p>
        Welcome { firstName }!
      </p>
      <p>
        You currently have { points } points
      </p>
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

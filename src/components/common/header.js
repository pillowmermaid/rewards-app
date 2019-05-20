import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  toggleLogin as toggleLoginAction
} from 'actions'
import './header.css';

const Header = ({
  isAuthenticated,
  toggleLogin }) => {
    return (
      <div className="header">
        <h1>SuperMiles</h1>
        { isAuthenticated &&
          <button className="sign-out-btn" onClick={() => toggleLogin(false) }>
            <span>Sign out</span>
          </button>
        }
      </div>
    );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired
};

const mapStateToProps = ({ application }) => ({
  isAuthenticated: application.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  toggleLogin: data => dispatch(toggleLoginAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

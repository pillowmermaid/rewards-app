import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  toggleLogin as toggleLoginAction
} from 'actions';

import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.usernameRef = createRef();
    this.passwordRef = createRef();
    this.validateLogin = this.validateLogin.bind(this);
  }
  validateLogin() {
    const { toggleLogin } = this.props;
    const un = this.usernameRef.current.value === 'admin';
    const pw = this.passwordRef.current.value === 'password';
    this.setState({ error: false });
    if (un && pw) {
      toggleLogin(true);
    } else {
      this.setState({ error: true });
    }
  }
  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />
    }
    return (
      <div className="page page--login">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={this.usernameRef} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={this.passwordRef} />
        <button className="btn login-btn" onClick={this.validateLogin}>Log In</button>
        { this.state.error && 
          <p>Sorry your credentials were incorrect.</p>
        }
      </div>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired
};


const mapStateToProps = ({ application }) => ({
  isAuthenticated: application.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  toggleLogin: data => dispatch(toggleLoginAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

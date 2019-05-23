import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import Landing from 'components/pages/Landing';
import Login from 'components/pages/Landing/login';
import Success from 'components/pages/Success';
import NotFound from 'components/pages/NotFound';
import './App.css';

const App = ({ isAuthenticated, isModalOpen }) => (
  <Router>
    <div className={classnames({ backdrop: isModalOpen })}></div>
    <Header />
    <Switch>
      <Landing exact path="/" />
      <Route path="/login" component={Login} />
      <Route path="/success" component={Success} />
      <Route component={NotFound} />
    </Switch>
    { isAuthenticated && 
      <Footer />
    }
  </Router>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired
};

const mapStateToProps = ({ application }) => ({
  isAuthenticated: application.isAuthenticated,
  isModalOpen: application.isModalOpen
});

export default connect(mapStateToProps)(App);
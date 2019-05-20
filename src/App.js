import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Header from 'components/common/header';
import Landing from 'components/pages/Landing';
import Login from 'components/pages/Landing/login';
import NotFound from 'components/pages/NotFound';
import './App.css';

const App = ({ isModalOpen }) => (
  <Router>
    <div className={classnames({ backdrop: isModalOpen })}></div>
    <Header />
    <Switch>
      <Landing exact path="/" />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />    
    </Switch>
  </Router>
);

const mapStateToProps = ({ application }) => ({
  isModalOpen: application.isModalOpen
});

export default connect(mapStateToProps)(App);
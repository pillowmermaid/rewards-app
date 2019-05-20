import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/common/header';
import Landing from 'components/pages/Landing';
import Login from 'components/pages/Landing/login';
import NotFound from 'components/pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Landing exact path="/" />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />    
      </Switch>
    </Router>
  );
}

export default App;
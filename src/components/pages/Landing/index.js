import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserHome from 'components/pages/UserHome';

const AuthLanding = ({ isAuthenticated, ...rest }) => (
  <Route
  {...rest}
    render={props =>
      isAuthenticated ?
        (<UserHome />) :
        (<Redirect
          to= {{
            pathname: '/login',
            state: { from: props.location }
            }}
        />)
    }
  />
)

AuthLanding.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({ application }) => ({
  isAuthenticated: application.isAuthenticated
});

export default connect(mapStateToProps)(AuthLanding);

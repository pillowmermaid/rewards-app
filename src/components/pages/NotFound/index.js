import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const NotFound = () => {
    return (
      <div className="page page--not-found">
        <h1>Sorry, we cannot find your page</h1>
        <Link to="/">Return to home page</Link>
      </div>
    );
}

export default NotFound;

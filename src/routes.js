import React from 'react';
import App from 'containers/App';
import { Router } from '@reach/router';
import LoginComponent from 'components/LoginComponent/';

const routes =  (
  <Router>
    <App path="/" >
      <LoginComponent path="login" />
    </App>
  </Router>
);

export default routes;

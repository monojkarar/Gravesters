import React from 'react';
import App from 'containers/App';
import { Router } from '@reach/router';
import LoginComponent from 'components/LoginComponent/';


// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to
// other React components.

const routes =  (
  <Router>
    <App path="/" />
    <LoginComponent path="login" />
  </Router>
);

export default routes;

import React from 'react';
import App from 'containers/App';
import { Route } from 'react-router';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to
// other React components.

export default (
  <Route path='/' component={App} />
);

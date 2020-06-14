import * as React from 'react';
import { Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import { routes as authRoutes, PrivateRoute, AuthGuard } from 'src/modules/auth';
import { routes as userRoutes } from 'src/modules/user';

import { GlobalStyle } from 'src/styles/global';
import { RouteType } from 'src/types/routes';

import { PATH } from 'src/constants';

const appRoutes: RouteType[] = [
  ...authRoutes,
  ...userRoutes
];

const App: React.FC = () => (
  <AuthGuard>
    <Router>
      <Switch>
        {appRoutes.map((route) => (
          <PrivateRoute key={route.name} {...route} />
        ))}
        <Redirect to={PATH.LOGIN} />
      </Switch>
      <GlobalStyle />
    </Router>
  </AuthGuard>
);

export default App;

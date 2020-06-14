import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PATH } from 'src/constants';

import { RouteType } from 'src/types/routes';
import { AuthGuardContext } from '../context';

const PrivateRoute: React.FC<RouteType> = ({
  component: Component,
  isPrivate,
  redirect,
  routes,
  ...rest
}) => {
  const { user } = React.useContext(AuthGuardContext);
  if (!Component) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isPrivate && !user) {
          return <Redirect to={PATH.LOGIN} />;
        }

        if (!isPrivate && user) {
          return <Redirect to={PATH.ROOT} />;
        }

        return (
          <Component {...props}>
            {Array.isArray(routes) && routes.length > 0 && (
              <Switch>
                {routes.map((nested: RouteType, index: number) => nested.component && (
                  <Route
                    key={String(index)}
                    path={nested.path}
                    exact={nested.exact}
                    component={nested.component}
                  />
                ))}
                {!!redirect && <Redirect {...redirect} />}
              </Switch>
            )}
          </Component>
        );
      }}
    />
  );
};

export default PrivateRoute;

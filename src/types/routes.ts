import * as React from 'react';

export interface RouteType {
  component: React.FC;
  routes?: RouteType[];
  name: string;
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
  redirect?: {
    from: string;
    to: string;
  };
}

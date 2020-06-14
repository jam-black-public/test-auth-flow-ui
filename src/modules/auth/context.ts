import * as React from 'react';

import { AuthGuardContextInterface, LoggedUserInterface } from './types';

export const AuthGuardContext = React.createContext<AuthGuardContextInterface>({
  user: null,
  setUser: () => {}
});

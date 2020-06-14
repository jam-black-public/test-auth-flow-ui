import * as React from 'react';
import { Spinner } from 'react-bootstrap';

import { useCheckUserAuth } from '../hooks';

import { Layout } from './AuthGuard.style';
import { AuthGuardContext } from '../context';
import { AuthGuardPropsInterface } from '../types';

const AuthGuard: React.FC<AuthGuardPropsInterface> = ({ children }) => {
  const [{ user, loading, setUser }] = useCheckUserAuth();

  if (loading) {
    return (
      <Layout>
        <Spinner animation="border" variant="dark" />
      </Layout>
    );
  }

  return (
    <AuthGuardContext.Provider value={{ user, setUser }}>
      {children}
    </AuthGuardContext.Provider>
  );
};

export default AuthGuard;

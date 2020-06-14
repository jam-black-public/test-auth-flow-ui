import React from 'react';

import { ErrorBoundary } from 'src/common';
import LoginForm from '../components/LoginForm';

const Page: React.FC = () => (
  <ErrorBoundary>
    <LoginForm />
  </ErrorBoundary>
);

export default Page;

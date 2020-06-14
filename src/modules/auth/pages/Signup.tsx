import React from 'react';

import { ErrorBoundary } from 'src/common';
import SignupForm from '../components/SignupForm';

const Page: React.FC = () => (
  <ErrorBoundary>
    <SignupForm />
  </ErrorBoundary>
);

export default Page;

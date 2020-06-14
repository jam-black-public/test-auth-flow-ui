import React from 'react';

import { ErrorBoundary } from 'src/common';
import UserInfo from '../components/UserInfo';

const Page: React.FC = () => (
  <ErrorBoundary>
    <UserInfo />
  </ErrorBoundary>
);

export default Page;

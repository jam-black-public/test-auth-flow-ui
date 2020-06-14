import * as React from 'react';

import { AsyncComponentType, PropsType } from './Loadable.types';

const Loadable = (AsyncCompFactory: AsyncComponentType, FallbackComp = null) => {
  const AsyncComp = React.lazy(AsyncCompFactory);

  const LoadableComp: React.FC<PropsType> = (props) => (
    <React.Suspense fallback={FallbackComp}>
      <AsyncComp {...props} />
    </React.Suspense>
  );

  return LoadableComp;
};


export default Loadable;

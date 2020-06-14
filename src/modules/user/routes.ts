import { Loadable } from 'src/common';

import { PATH } from 'src/constants';

const UserInfoPage = Loadable(() => import('./pages/UserInfo'));

export default [
  {
    component: UserInfoPage,
    name: 'UserInfo',
    path: PATH.ROOT,
    exact: true,
    isPrivate: true
  }
];

import { Loadable } from 'src/common';

import { PATH } from 'src/constants';

const LoginPage = Loadable(() => import('./pages/Login'));
const SignupPage = Loadable(() => import('./pages/Signup'));

export default [
  {
    component: LoginPage,
    name: 'Login',
    path: PATH.LOGIN,
    exact: false,
    isPrivate: false
  },
  {
    component: SignupPage,
    name: 'Signup',
    path: PATH.SIGNUP,
    exact: false,
    isPrivate: false
  }
];

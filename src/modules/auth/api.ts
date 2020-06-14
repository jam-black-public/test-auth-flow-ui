import { api } from 'src/utils';

import { LoginPayloadInterface, SignUpPayloadInterface } from './types';

class AuthApi {
  public static checkAuth() {
    return api.get('/auth/profile');
  }

  public static login(values: LoginPayloadInterface) {
    return api.post('/auth/login', values);
  }

  public static signUp(values: SignUpPayloadInterface) {
    return api.post('/auth/register', values);
  }
}

export default AuthApi;

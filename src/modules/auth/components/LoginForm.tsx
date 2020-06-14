import * as React from 'react';
import { useHistory } from 'react-router';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useLogin, useCheckUserAuth } from '../hooks';

import { SignupButton, SigninButton } from './LoginForm.style';
import { Layout } from 'src/common';
import { LoggedUserInterface, LoginActions } from '../types';

import { PATH } from 'src/constants';
import { AuthGuardContext } from '../context';

const LoginForm = () => {
  const history = useHistory();
  const { setUser } = React.useContext(AuthGuardContext);
  const [{ values, errors, isLoading, isSubmitting }, dispatch] = useLogin((user: LoggedUserInterface) => {
    setUser(user);
    history.push(PATH.ROOT);
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: LoginActions.changeEmail, value: e.target.value || '' });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: LoginActions.changePassword, value: e.target.value || '' });
  };

  const handleSubmit = () => {
    dispatch({ type: LoginActions.setSubmitting, value: true });
  };

  const handleGoToSignup = () => {
    history.push(PATH.SIGNUP);
  };

  return (
    <Layout>
      <Form>
        <Form.Group>
          <Form.Control
            autoComplete="off"
            isInvalid={!!errors.email}
            value={values.email}
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            autoComplete="off"
            isInvalid={!!errors.password}
            type="password"
            value={values.password}
            placeholder="Password"
            onChange={handleChangePassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <div className="forgot-password">
            <span>
              Forgot Password?
            </span>
            <Link to={PATH.SIGNUP}>
              Click Here
            </Link>
          </div>
        </Form.Group>
        <Form.Group>
          <SignupButton variant="dark" onClick={handleGoToSignup}>
            Sign up
          </SignupButton>
          <SigninButton variant="primary" disabled={isSubmitting} onClick={handleSubmit}>
            {isLoading ? 'Loading…' : 'Sign in'}
          </SigninButton>
        </Form.Group>
      </Form>
    </Layout>
  );
};

export default LoginForm;

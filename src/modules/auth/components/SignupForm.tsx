import * as React from 'react';
import { useHistory } from 'react-router';
import { Form, Col } from 'react-bootstrap';

import { SigninButton, SignupButton } from './SignupForm.style';
import { Layout } from 'src/common';

import { PATH } from 'src/constants';
import { useSignUpForm } from '../hooks';
import { LoggedUserInterface, SignUpAction } from '../types';
import { AuthGuardContext } from '../context';

const SignupForm = () => {
  const history = useHistory();
  const { setUser } = React.useContext(AuthGuardContext);

  const [{ values, errors, isLoading, isSubmitting }, dispatch] = useSignUpForm((user: LoggedUserInterface) => {
    setUser(user);
    history.push(PATH.ROOT);
  });

  const handleSubmit = () => {
    dispatch({ type: SignUpAction.setSubmitting, value: true });
  };

  const handleGoToLogin = () => {
    history.push(PATH.LOGIN);
  };

  const setValue = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SignUpAction.setValue, value: { field, value: e.target.value || '' } });
  };

  return (
    <Layout>
      <Form>
        <Form.Group>
          <Form.Control
            placeholder="First Name"
            autoComplete="off"
            isInvalid={!!errors.firstName}
            value={values.firstName}
            onChange={setValue('firstName')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Last Name"
            autoComplete="off"
            isInvalid={!!errors.lastName}
            value={values.lastName}
            onChange={setValue('lastName')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Email Address"
            autoComplete="off"
            isInvalid={!!errors.email}
            value={values.email}
            onChange={setValue('email')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Password"
            type="password"
            autoComplete="off"
            isInvalid={!!errors.password}
            value={values.password}
            onChange={setValue('password')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Company Name"
            autoComplete="off"
            isInvalid={!!errors.companyName}
            value={values.companyName}
            onChange={setValue('companyName')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.companyName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Company Address"
            autoComplete="off"
            isInvalid={!!errors.companyAddress}
            value={values.companyAddress}
            onChange={setValue('companyAddress')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.companyAddress}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col sm={6}>
              <Form.Control
                placeholder="City"
                autoComplete="off"
                isInvalid={!!errors.city}
                value={values.city}
                onChange={setValue('city')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Control
                placeholder="State"
                autoComplete="off"
                isInvalid={!!errors.state}
                value={values.state}
                onChange={setValue('state')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Control
                placeholder="Zip"
                autoComplete="off"
                isInvalid={!!errors.zip}
                value={values.zip}
                onChange={setValue('zip')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="Phone Number"
            autoComplete="off"
            isInvalid={!!errors.phoneNumber}
            value={values.phoneNumber}
            onChange={setValue('phoneNumber')}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <SigninButton variant="dark" onClick={handleGoToLogin}>
            Login
          </SigninButton>
          <SignupButton variant="primary" disabled={isSubmitting} onClick={handleSubmit}>
            {isLoading ? 'Loading…' : 'Sign up'}
          </SignupButton>
        </Form.Group>
      </Form>
    </Layout>
  );
};

export default SignupForm;

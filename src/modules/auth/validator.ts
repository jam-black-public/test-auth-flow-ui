import { LoginPayloadInterface, SignUpPayloadInterface } from './types';

import { ERRORS, REGEXP } from 'src/constants';

export const validateLoginForm = (values: LoginPayloadInterface) => {
  const errors = {
    email: '',
    password: ''
  };

  if (!values.email) {
    errors.email = ERRORS.EMPRY_FIELD;
  } else if (!REGEXP.EMAIL.test(values.email.toLowerCase())) {
    errors.email = ERRORS.INVALID_EMAIL;
  }

  if (!values.password) {
    errors.password = ERRORS.EMPRY_FIELD;
  }

  return {
    isValid: !errors.email && !errors.password,
    errors
  };
};

export const validateSignUpForm = (values: SignUpPayloadInterface) => {
  const errors = { firstName: '', lastName: '', email: '', companyName: '', companyAddress: '', city: '', state: '', zip: '', phoneNumber: '' };

  Object.keys(values).forEach((key: string) => {
    // @ts-ignore
    if (!values[key]) {
      // @ts-ignore
      errors[key] = ERRORS.EMPRY_FIELD;
    }
  });

  if (!values.email) {
    errors.email = ERRORS.EMPRY_FIELD;
  } else if (!REGEXP.EMAIL.test(values.email.toLowerCase())) {
    errors.email = ERRORS.INVALID_EMAIL;
  }

  if (!values.zip) {
    errors.zip = ERRORS.EMPRY_FIELD;
  } else if (!REGEXP.ZIP.test(values.zip.toLowerCase())) {
    errors.zip = ERRORS.INVALID_ZIP;
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = ERRORS.EMPRY_FIELD;
  } else if (!REGEXP.TELEPHONE_NUMBER.test(values.phoneNumber.toLowerCase())) {
    errors.phoneNumber = ERRORS.INVALID_TELEPHONE_NUMBER;
  }

  return {
    isValid: !Object.values(errors).find((error) => error),
    errors
  };
};

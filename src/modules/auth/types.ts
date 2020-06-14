import { Dispatch } from 'react';

export enum LoginActions {
  changeEmail = 'changeEmail',
  changePassword = 'changePassword',
  setErrors = 'setErrors',
  setLoading = 'setLoading',
  setSubmitting = 'setSubmitting',
  resetForm = 'resetForm',
}
export enum SignUpAction {
  setValue = 'setValue',
  setErrors = 'setErrors',
  setLoading = 'setLoading',
  setSubmitting = 'setSubmitting',
  resetForm = 'resetForm',
}

export interface LoginStateInterface {
  isLoading: boolean;
  isSubmitting: boolean;
  values: {
    email: string;
    password: string;
  };
  errors: {
    email: string;
    password: string;
  };
}

export interface SignUpStateInterface {
  isLoading: boolean;
  isSubmitting: boolean;
  values: {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    companyAddress: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    password: string;
  };
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    companyAddress: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    password: string;
  };
}

export interface LoginActionInterface {
  type: LoginActions;
  value?: string | boolean | object;
}

export interface SignActionUpInterface {
  type: SignUpAction;
  value?: string | boolean | any;
}

export type LoginDispatchInterface = Dispatch<LoginActionInterface>;
export type SignUpDispatchInterface = Dispatch<SignActionUpInterface>;

export interface LoginPayloadInterface {
  email: string;
  password: string;
}

export interface SignUpPayloadInterface {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companyAddress: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  password: string;
}

export type LoginReducerStateInterface = any;

export interface AuthGuardPropsInterface {
  children: React.ReactElement;
}

export interface AuthGuardContextInterface {
  user: null | LoggedUserInterface;
  setUser: (user: LoggedUserInterface | null) => void;
}

export interface LoggedUserInterface {
  token: string;
  firstName: string;
  lastName: string;
  [key: string]: any;
}

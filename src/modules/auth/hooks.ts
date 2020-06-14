import { useReducer, useEffect, useState } from 'react';

import { validateLoginForm, validateSignUpForm } from './validator';
import api from './api';
import { setToken } from 'src/utils/localStorage';

import {
  LoginReducerStateInterface,
  LoginDispatchInterface,
  LoginActionInterface,
  LoginStateInterface,
  LoginActions,
  SignUpAction,
  SignUpStateInterface,
  SignActionUpInterface,
  SignUpDispatchInterface,
  LoggedUserInterface
} from './types';

const SIGNUP_INITIAL_STATE = {
  isSubmitting: false,
  isLoading: false,
  values: { firstName: '', lastName: '', email: '', companyName: '', companyAddress: '', city: '', state: '', zip: '', phoneNumber: '', password: '' },
  errors: { firstName: '', lastName: '', email: '', companyName: '', companyAddress: '', city: '', state: '', zip: '', phoneNumber: '', password: '' }
};

const LOGIN_INITIAL_STATE = {
  isSubmitting: false,
  isLoading: false,
  values: { email: '', password: '' },
  errors: { email: '', password: '' }
};

const submitLoginForm = async (
  state: LoginStateInterface,
  dispatch: LoginDispatchInterface,
  successCb: Function
) => {
  if (state.errors.email || state.errors.password) {
    return;
  }

  const { isValid, errors } = validateLoginForm(state.values);

  if (!isValid) {
    dispatch({ type: LoginActions.setErrors, value: errors });
    dispatch({ type: LoginActions.setSubmitting, value: false });
    return;
  }

  try {
    dispatch({ type: LoginActions.setLoading, value: true });
    const { data } = await api.login(state.values);
    successCb(data);
    dispatch({ type: LoginActions.resetForm });
  } catch ({ error }) {
    console.error(error);
    alert(error.error);
  } finally {
    dispatch({ type: LoginActions.setSubmitting, value: false });
    dispatch({ type: LoginActions.setLoading, value: false });
  }
};

const submitSignUpForm = async (
  state: SignUpStateInterface,
  dispatch: SignUpDispatchInterface,
  successCb: Function
) => {
  const { isValid, errors } = validateSignUpForm(state.values);

  if (!isValid) {
    dispatch({ type: SignUpAction.setErrors, value: errors });
    dispatch({ type: SignUpAction.setSubmitting, value: false });
    return;
  }

  try {
    dispatch({ type: SignUpAction.setLoading, value: true });
    const { data } = await api.signUp(state.values);
    successCb(data);
    dispatch({ type: SignUpAction.resetForm });
  } catch ({ error }) {
    console.error(error);
  } finally {
    dispatch({ type: SignUpAction.setSubmitting, value: false });
    dispatch({ type: SignUpAction.setLoading, value: false });
  }
};

export const useLogin = (successCb: Function = () => {}) => {
  function reducer(state: LoginReducerStateInterface, action: LoginActionInterface) {
    switch (action.type) {
      case LoginActions.changeEmail:
        return {
          ...state,
          values: {
            ...state.values,
            email: action.value
          },
          errors: {
            ...state.errors,
            email: ''
          }
        };

      case LoginActions.changePassword:
        return {
          ...state,
          values: {
            ...state.values,
            password: action.value
          },
          errors: {
            ...state.errors,
            password: ''
          }
        };

      case LoginActions.setLoading:
        return { ...state, isLoading: action.value };

      case LoginActions.setSubmitting:
        return { ...state, isSubmitting: action.value };

      case LoginActions.setErrors:
        return { ...state, errors: action.value };

      case LoginActions.resetForm:
        return { ...LOGIN_INITIAL_STATE };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, LOGIN_INITIAL_STATE);

  useEffect(() => {
    if (state.isSubmitting) {
      submitLoginForm(state, dispatch, successCb);
    }
  }, [state.isSubmitting]);

  return [state, dispatch];
};

export const useSignUpForm = (successCb: Function = () => {}) => {
  function reducer(state: SignUpStateInterface, action: SignActionUpInterface) {
    switch (action.type) {
      case SignUpAction.setValue: {
        const { field, value } = action.value;
        return {
          ...state,
          values: {
            ...state.values,
            [field]: value
          },
          errors: {
            ...state.errors,
            [field]: ''
          }
        };
      }

      case SignUpAction.setLoading:
        return { ...state, isLoading: action.value };

      case SignUpAction.setSubmitting:
        return { ...state, isSubmitting: action.value };

      case SignUpAction.setErrors:
        return { ...state, errors: action.value };

      case SignUpAction.resetForm:
        return { ...LOGIN_INITIAL_STATE };

      default:
        return state;
    }
  }

  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, SIGNUP_INITIAL_STATE);

  useEffect(() => {
    if (state.isSubmitting) {
      submitSignUpForm(state, dispatch, successCb);
    }
  }, [state.isSubmitting]);

  return [state, dispatch];
};

export const useCheckUserAuth = () => {
  const [loggedUser, setLoggedUser] = useState<LoggedUserInterface | null>(null);
  const [loading, setLoading] = useState(true);

  const setUser = (user: LoggedUserInterface| null) => {
    if (user) {
      setToken(user.token);
    }
    setLoggedUser(user);
  };

  const checkUserAuth = async () => {
    try {
      const { data } = await api.checkAuth();
      setUser(data);
    } catch (ex) {
      console.error(ex);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return [{ user: loggedUser, loading, setUser }];
};

import * as React from 'react';

import { PropsType, StateType } from './ErrorBoundary.types';

const DEFAULT_ERROR_MESSAGE = 'Oops! an error occurred!';

export default class ErrorBoundary extends React.Component<PropsType, StateType> {
  state = {
    error: '',
    errorInfo: null
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line react/no-set-state
    this.setState({
      error,
      errorInfo
    });
  }

  renderError() {
    const { errorInfo } = this.state;
    const { text } = this.props;

    return (
      <div>
        <h3>
          {text || DEFAULT_ERROR_MESSAGE}
        </h3>
        {!!errorInfo && (
          <p>
            {JSON.stringify(errorInfo)}
          </p>
        )}
      </div>
    );
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return this.renderError();
    }

    return children;
  }
}

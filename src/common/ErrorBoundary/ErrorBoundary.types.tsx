import { ReactNode, ReactElement, ErrorInfo } from 'react';

export interface PropsType {
  text?: string;
  children: ReactNode | ReactElement;
}

export interface StateType {
  error: Error | string;
  errorInfo: ErrorInfo | null;
}

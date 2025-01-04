import { store } from './store';
import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';

interface providerProps {
  children: ReactNode;
}

const ReduxProvider: FC<providerProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

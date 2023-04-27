import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';


const TokenSetter = () => {
  const { setToken } = useAuth();

  useEffect(() => {
    setToken('myToken');
  }, [setToken]);

  return null;
};

const TestComponent = () => {
  const { token } = useAuth();
  return <div>{token}</div>;
};

describe('AuthContext', () => {
  it('should set and retrieve the token value', () => {
    const { getByText } = render(
      <AuthProvider>
        <TokenSetter />
        <TestComponent />
      </AuthProvider>
    );

    expect(getByText('myToken')).toBeInTheDocument();
  });
});


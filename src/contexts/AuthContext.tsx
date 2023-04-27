import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

type Props = {
  children?: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({ token: null, setToken: () => { } });

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const contextValue: AuthContextType = {
    token,
    setToken: (newToken: string | null) => {
      setToken(newToken);
      if (newToken) {
        localStorage.setItem('token', newToken);
      } else {
        localStorage.removeItem('token');
      }
    },
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

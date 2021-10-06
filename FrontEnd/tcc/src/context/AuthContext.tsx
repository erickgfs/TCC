import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  login(credentials: LoginCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth', { email, password });
    console.log('teste');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'erick', login }}>
      {children}
    </AuthContext.Provider>
  );
};

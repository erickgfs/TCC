import React, { createContext, useCallback, useState } from 'react';
import jwt_decode from 'jwt-decode';
import api from '../services/api';

interface AuthState {
  token: string;
  user_type: string;
}

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
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@TCC:token');
    const user_type = localStorage.getItem('@TCC:user_type');

    if (token && user_type) {
      return { token, user_type };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth', { email, password });
    const tokenDecode: any = jwt_decode(response.data.token);

    const { token } = response.data.token;
    const { user_type } = tokenDecode.user_type;

    localStorage.setItem('@TCC:token', token);
    localStorage.setItem('@TCC:user_type', user_type);

    setData({ token, user_type });
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'erick', login }}>
      {children}
    </AuthContext.Provider>
  );
};

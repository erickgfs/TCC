import React, { createContext, useCallback, useState, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import api from '../services/api';

interface AuthState {
  token: string;
  user_type: string;
  name: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  user_type: string;
  login(credentials: LoginCredentials): Promise<{}>;
  logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@TCC:token');
    const user_type = localStorage.getItem('@TCC:user_type');
    const name = localStorage.getItem('@TCC:name');

    if (token && user_type && name) {
      return { token, user_type, name };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/auth', { email, password });

      const tokenDecode: any = jwt_decode(response.data.token);
      const tokenResponse = response.data.token;

      const { user_type, name } = tokenDecode;
      const userType = user_type;
      const userName = name;

      localStorage.setItem('@TCC:token', tokenResponse);
      localStorage.setItem('@TCC:user_type', user_type);
      localStorage.setItem('@TCC:name', name);

      setData({ token: tokenResponse, user_type, name });
      return { userType, userName };
    } catch (e) {
      alert('Login incorreto');
      const userType = null;
      const userName = null;
      return { userType, userName };
    }
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@TCC:token');
    localStorage.removeItem('@TCC:user_type');
    localStorage.removeItem('@TCC:name');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ name: data.name, user_type: data.user_type, login, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

import React, { createContext, useContext } from 'react';
import api from '@lib/api';

type AuthenticationType = {
  login: Function;
  logout: Function;
  isLoggedIn: boolean;
};

type LoginType = {
  email: string;
  password: string;
};

const AuthenticationContext = createContext<AuthenticationType | null>(null);

export const AuthenticationProvider = ({ children }) => {
  const login = async (payload: LoginType) => {
    try {
      const response = await api.post('/login', payload);
      console.log(response);
      api.defaults.headers.Authentication = `Bearer ${response.data.data.token}`;
    } catch (error) {
      console.log(error.data);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.Authentication;
  };

  return (
    <AuthenticationContext.Provider
      value={{ login, logout, isLoggedIn: false }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () =>
  useContext<AuthenticationType>(AuthenticationContext);

import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '@lib/api';
import Router, { useRouter } from 'next/router';

type AuthenticationType = {
  login: Function;
  logout: Function;
  registerUser: Function;
  user: any;
  error: string;
  isLoggedIn: boolean;
  isLoading: boolean;
};

type LoginType = {
  email: string;
  password: string;
};

const AuthenticationContext = createContext<AuthenticationType | null>(null);

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const validate = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      api.defaults.headers.Authorization = `Bearer ${token}`;
      try {
        const response = await api.get('/auth/validate');
        console.log(response);
        setUser(response.data.data);
      } catch (error) {
        console.log(error.data);
      }
      setLoading(false);
    };

    const handleResetError = () => {
      setError(null);
    };

    router.events.on('routeChangeStart', handleResetError);
    validate();

    return () => {
      router.events.off('routeChangeStart', handleResetError);
    };
  }, []);

  const login = async (payload: LoginType) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/login', payload);

      api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`;
      localStorage.setItem('token', response.data.data.token);

      setUser(response.data.data);
      router.push('/');
    } catch (error) {
      setError(error.response.data.errors[0]);
    }
    setLoading(false);
  };

  const registerUser = async (payload) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/register', payload);

      api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`;
      localStorage.setItem('token', response.data.data.token);

      setUser(response.data.data);
      router.push('/');
    } catch (error) {
      setError(error.response.data.errors[0]);
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    delete api.defaults.headers.Authorization;
  };

  return (
    <AuthenticationContext.Provider
      value={{
        login,
        logout,
        isLoggedIn: !!user,
        isLoading: loading,
        user: user,
        registerUser,
        error,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () =>
  useContext<AuthenticationType>(AuthenticationContext);

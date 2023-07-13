/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useCallback, useMemo } from 'react';

import { AuthContext } from '.';

const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [loggedIn, setLoggedIn] = useState(user && user.token);

  const logIn = useCallback((data) => {
    setLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(data));
  }, []);
  const logOut = useCallback(() => {
    setLoggedIn(false);
    localStorage.removeItem('user');
  }, []);

  const getAuthToken = useCallback(() => {
    if (loggedIn) {
      return user.token;
    }
    return null;
  }, [loggedIn]);

  const getUsername = useCallback(() => {
    if (loggedIn) {
      return user.username;
    }
    return null;
  }, [loggedIn]);

  const value = useMemo(() => ({
    loggedIn,
    logIn,
    logOut,
    getAuthToken,
    getUsername,
  }), [loggedIn, logIn, logOut, getAuthToken, getUsername]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

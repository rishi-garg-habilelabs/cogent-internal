import React, { useState, createContext } from 'react';

export const AuthContext = createContext({
  auth: {
    token: localStorage.getItem('token'),
    role: null,
    _id: '',
    vat: '',
  },
  loader: false,
  snackbarConfig: {},
  login: () => {},
});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    role: null,
    vat: '',
  });
  const [loader, setLoader] = useState(false);
  const [snackbarConfig, setSnackbarConfig] = useState({});

  const login = (profile) => {
    setAuth(profile);
  };

  const setLoading = (temp) => {
    setLoader(temp);
  };

  return (
    <AuthContext.Provider value={{
      auth, login, loader, setLoading, snackbarConfig, setSnackbarConfig,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

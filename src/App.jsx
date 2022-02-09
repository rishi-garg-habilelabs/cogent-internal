import React from 'react';
import _ from 'lodash';
import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import AuthProvider from './contexts/AuthProvider';
import Register from './pages/register';
import { registerFormFields } from './utils/constant';
import Login from './pages/login';

const theme = createTheme();

const getFormFields = (r) => _.cloneDeep(registerFormFields).filter((f) => f.role.includes(r));

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Box
              sx={{ display: 'flex' }}
              style={{
                background: '#e4f5fd',
                minHeight: 'calc(100vh)',
                maxHeight: 'calc(100vh)',
              }}
            >
              <Routes>
                <Route path="/" exact element={<Login />} />
                <Route
                  path="/register"
                  exact
                  element={<Register fields={getFormFields('admin')} />}
                />
              </Routes>
            </Box>
          </AuthProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;

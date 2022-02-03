import React, { useState } from "react";
import _ from 'lodash';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./pages/Register";
import Home from "./pages/HomePage";
import { registerFormFields } from '../src/utils/constant';


const theme = createTheme();

const getFormFields = (r) => _.cloneDeep(registerFormFields).filter((f) => f.role.includes(r));
// const type = getQueryParams('type');

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" exact element={<Home  />} />
              <Route path="/register" exact element={<Register  fields={getFormFields('admin')}  />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

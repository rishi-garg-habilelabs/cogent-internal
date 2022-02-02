import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./pages/register/register";

const theme = createTheme();

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthProvider>
            <Router>
              <Routes>
                <Route path="/" exact element={<Register />} />
              </Routes>
            </Router>
        </AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

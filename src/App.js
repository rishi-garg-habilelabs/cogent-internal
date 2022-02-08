import React, { useState } from "react";
import _ from "lodash";
import "./App.css";
import { Box } from "@mui/material";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import { registerFormFields } from "../src/utils/constant";
import Sidebar from "./components/molecules/sidebar";
import Header from "./components/molecules/header";
import Login from "./pages/login";

const theme = createTheme();

const getFormFields = (r) =>
  _.cloneDeep(registerFormFields).filter((f) => f.role.includes(r));
// const type = getQueryParams('type');

const App = () => {
  const classes = useStyles();
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Box
              sx={{ display: "flex" }}
              style={{
                background: "#e4f5fd",
                minHeight: "calc(100vh)",
                maxHeight: "calc(100vh)",
              }}
            >
              <Routes>
                <Route path="/" exact element={<Login />} />{" "}
              </Routes>
            </Box>
            {/* <Box sx={{ display: "flex" }} style={{ background: "#e4f5fd" }}>
              <Header />
              <Sidebar />
              <Box
                component="main"
                className={classes.mainWrapper}
                sx={{ flexGrow: 1, p: 3 }}
              >
                <Box className={classes.containerWrapper}>
                  <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                      path="/register"
                      exact
                      element={<Register fields={getFormFields("admin")} />}
                    />

                    <Route path="/dashboard" exact element={<Dashboard />} />
                  </Routes>
                </Box>
              </Box>
            </Box> */}
          </AuthProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
};

// styles
const useStyles = makeStyles((theme) => ({
  customScroll: {
    "&::-webkit-scrollbar": {
      width: 7,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      outline: `1px solid slategrey`,
    },
  },
  mainWrapper: {
    padding: "89px 20px 80px 20px !important",
    //  background: theme.palette.primary.dark + " !important",
    //minHeight: "100vh",
    width: "calc(100% - 262px)",
    position: "relative",
    minHeight: "calc(100vh - 147px)",
    maxHeight: "calc(100vh - 147px)",
    alignItems: "center",
    "& .MuiPaper-root": {
      //  background: theme.palette.primary.main,
    },
  },
  loginBg: {
    backgroundPosition: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "97vh",
  },
  containerWrapper: {
    padding: 30,
    float: "left",
    minHeight: "calc(100vh - 160px)",
    maxHeight: "calc(100vh - 160px)",
    alignItems: "center",
    justifyContent: "space-between",
    overflowY: "auto",
    background: "white",
    width: "calc(100% - 100px)",
    // [theme.breakpoints.up("xl")]: {
    //   padding: "20px 200px 10px",
    // },
  },
}));

export default App;

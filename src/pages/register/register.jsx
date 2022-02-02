import logo from "./../../assets/images/logo.svg";
import "./../../App.css";
import style from "../../style/registerStyle";
import TextInput from "../../components/textfield/textfield";
import { useState } from "react";
import { Grid } from "@mui/material";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const classes = style();
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  return (
    <Grid container className={classes.root} spacing="4" justifyContent="center">
        <Grid item  className={classes.title} xs={12}>Register User</Grid>
      <Grid item  xs={8}>
        <TextInput
          label="firstname"
          name="firstname"
          onChange={handleFirstName}
          value={firstName}
        />
      </Grid>
    </Grid>
  );
};

export default Register;

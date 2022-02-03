import style from "../style/registerStyle";
import TextInput from "../components/textfield/textfield";
import { auth } from "../store/services/auth";
import Button from "../components/Buttons/button";
import { useState } from "react";
import { Grid } from "@mui/material";
import Buttons from "../../constant";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const classes = style();
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  // calling api

  // const payload = {};
  // const response = await auth.register({ ...payload});
  return (
    <Grid
      container
      className={classes.root}
      spacing="4"
      justifyContent="center"
    >
      <Grid container spacing="4" justifyContent="flex-end">
        <Grid item className={classes.title} xs={12}>
          Register User
        </Grid>
        <Grid item xs={8}>
          <TextInput
            label="firstname"
            name="firstname"
            onChange={handleFirstName}
            value={firstName}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.button}
        spacing="4"
        justifyContent="flex-end"
      >
        <Grid item>
          <Button name="Save" btntype={Buttons.PRIMARY} onClick="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;

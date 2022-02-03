import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "../components/Buttons/button";
import BTN from "../constant/buttonTypes";
import { useNavigate } from "react-router-dom";

import useStyles from '../custom-hooks/useStyles'
import styles from '../style/homePageStyle'

export default function HomePage() {
    const classes = useStyles(styles)()
    const navigate =useNavigate()
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Card  className={classes.cardLeft} sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Returning Parents/ Teacher/ Coordinators
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.primary"
              gutterBottom
              component="div"
            >
              If you have your Manabadi Google Platform (Classroom) User ID and
              Password, please sign in.
            </Typography>
            <Button btntype={BTN.PRIMARY} name="SIGN IN TO MANABADI PORTAL" />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Problem signing in to your Account.
            </Typography>
            <Typography variant="body2">
              If you don't have/remember your Manabadi credentials please use
              Recovery button to recover it.
              <Button btntype={BTN.SECONDARY} name="RECOVER ACCOUNT" />
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              New Registrations
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.primary"
              gutterBottom
              component="div"
            >
              Not yet registered to the portal (First Time Parents)?
            </Typography>
            <Button btntype={BTN.PRIMARY} name="REGISTER NOW"  onClick={()=>navigate('/register')}/>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Are you a Returning Student?
            </Typography>
            <Button btntype={BTN.SECONDARY} name="WATCH VIDEO" />
            <Typography variant="body2">
              All the students who have been assorted to Manabadi and are
              joining back will be considered as returning students.
              <br />
            </Typography>
           
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

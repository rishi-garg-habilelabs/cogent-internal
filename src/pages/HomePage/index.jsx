import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "../../components/atoms/button";
import BTN from "../../constant/buttonTypes";
import { useNavigate } from "react-router-dom";

import useStyles from "../../custom-hooks/useStyles";
import styles from "./style";

export default function HomePage() {
  const classes = useStyles(styles)();
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="center" className={classes.wrapper}>
      <Grid container justifyContent="center" className={classes.mainContainer}>
        <Grid item xs={6}>
          <Card className={classes.cardLeft} sx={{ maxWidth: 400 }}>
            <CardContent>
              <Grid item style={{ marginTop: 5 }}>
                <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                  Returning Parents/ Teacher/ Coordinators
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                  component="div"
                >
                  If you have your Manabadi Google Platform (Classroom) User ID
                  and Password, please sign in.
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Button
                  btntype={BTN.PRIMARY}
                  name="SIGN IN TO MANABADI PORTAL"
                />
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Problem signing in to your Account.
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Grid className={classes.textMargin}>
                  <Button btntype={BTN.SECONDARY} name="RECOVER ACCOUNT" />
                </Grid>
                <Grid className={classes.textMargin}>
                  <Typography variant="body2">
                    If you don't have/remember your Manabadi credentials please
                    use Recovery button to recover it.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRight} sx={{ maxWidth: 400 }}>
            <CardContent>
              <Grid style={{ marginTop: 5 }}>
                <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                  New Registrations
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography sx={{ fontSize: 14 }}>
                  Not yet registered to the portal (First Time Parents)?
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Button
                  btntype={BTN.SECONDARY}
                  name="REGISTER NOW"
                  onClick={() => navigate("/register")}
                />
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography>Are you a Returning Student?</Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Button btntype={BTN.SECONDARY} name="WATCH VIDEO" />
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography variant="body2">
                  All the students who have been assorted to Manabadi and are
                  joining back will be considered as returning students.
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import { useTranslation } from "react-i18next";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "../../components/atoms/button";
import BTN from "../../constant/buttonTypes";
import { useNavigate } from "react-router-dom";

import useStyles from "../../custom-hooks/useStyles";
import styles from "./style";

export default function HomePage() {
  const { t } = useTranslation();
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
                  {t("RETURN")}
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                  component="div"
                >
                  {t("PLEASE_SIGN_IN")}
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Button btntype={BTN.PRIMARY} name={t("SIGN_IN")} />
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {t("PROBLIEM_IN_SIGN_IN")}
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Grid className={classes.textMargin}>
                  <Button btntype={BTN.SECONDARY} name="RECOVER ACCOUNT" />
                </Grid>
                <Grid className={classes.textMargin}>
                  <Typography variant="body2">{t("RECOVER_ACC")}</Typography>
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
                  {t("NEW_REGISTER")}
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography sx={{ fontSize: 14 }}>
                  {t("FIRST_TIME_PARENT")}
                </Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Button
                  btntype={BTN.SECONDARY}
                  name={t("REGISTER_NOW")}
                  onClick={() => navigate("/register")}
                />
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography>{t("RETURN_STUDENT")}</Typography>
              </Grid>
              <Grid item className={classes.textMargin}>
                <Button btntype={BTN.SECONDARY} name={t("WATCH_VIDEO")} />
              </Grid>
              <Grid item className={classes.textMargin}>
                <Typography variant="body2">
                 {t("JOIN_BACK")}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

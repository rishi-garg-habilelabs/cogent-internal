import * as React from "react";
import Card from "@mui/material/Card";
import { useTranslation } from "react-i18next";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import Button from "../../components/atoms/button";
import { Buttons } from "../../constant";
import { useNavigate } from "react-router-dom";
import { getData } from "../../store/services/auth";
import useStyles from "../../custom-hooks/useStyles";
import styles from "./style";

const HomePage = () => {
  const { t } = useTranslation();
  const classes = useStyles(styles)();
  const navigate = useNavigate();
  // make service and  call api using respective service
  const getDataApi = async () => {
    // const payload = {};
    //  const response =  await getData()
    //  console.log('response',response)
  };
  React.useEffect(() => {
    getDataApi();
  }, []);
  return (
    <Box display="flex" className={classes.wrapper}>
      <Box
        display="flex"
        sx={{
          width: "25%",
          height: 300,
        }}
      >
        <Card className={classes.cardLeft} sx={{ maxWidth: 400 }}>
          <CardContent>
            <Box style={{ marginTop: 5 }}>
              <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                {t("RETURN")}
              </Typography>
            </Box>
            <Box className={classes.textMargin}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
                component="div"
              >
                {t("PLEASE_SIGN_IN")}
              </Typography>
            </Box>
            <Box className={classes.textMargin}>
              <Button btntype={Buttons.PRIMARY} name={t("SIGN_IN")} />
            </Box>
            <Box className={classes.textMargin}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {t("PROBLIEM_IN_SIGN_IN")}
              </Typography>
            </Box>
            <Box className={classes.textMargin}>
              <Box className={classes.textMargin}>
                <Button btntype={Buttons.SECONDARY} name="RECOVER ACCOUNT" />
              </Box>
              <Box className={classes.textMargin}>
                <Typography variant="body2">{t("RECOVER_ACC")}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        display="flex"
        sx={{
          width: "25%",
          height: 300,
        }}
      >
        <Card className={classes.cardRight} sx={{ maxWidth: 400 }}>
          <CardContent>
            <Box style={{ marginTop: 5 }}>
              <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                {t("NEW_REGISTER")}
              </Typography>
            </Box>
            <Box className={classes.textMargin}>
              <Typography sx={{ fontSize: 14 }}>
                {t("FIRST_TIME_PARENT")}
              </Typography>
            </Box>
            <Box className={classes.textMargin}>
              <Button
                btntype={Buttons.SECONDARY}
                name={t("REGISTER_NOW")}
                onClick={() => navigate("/register")}
              />
            </Box>
            <Box className={classes.textMargin}>
              <Typography>{t("RETURN_STUDENT")}</Typography>
            </Box>
            <Box className={classes.textMargin}>
              <Button btntype={Buttons.SECONDARY} name={t("WATCH_VIDEO")} />
            </Box>
            <Box className={classes.textMargin}>
              <Typography variant="body2">{t("JOIN_BACK")}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HomePage;

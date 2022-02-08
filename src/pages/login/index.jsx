import * as React from "react";
import Card from "@mui/material/Card";
import { useTranslation } from "react-i18next";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import Button from "../../components/atoms/button";
import { Buttons } from "../../constant";
import { useNavigate } from "react-router-dom";
import useStyles from "../../custom-hooks/useStyles";
import Divider from '../../components/atoms/divider'
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getToDo } from '../../store/actions/auth';

const HomePage = () => {
  const { t } = useTranslation();
  const classes = useStyles(styles)();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log(store);
  React.useEffect(() => {
    dispatch(getToDo());
  }, []);
  return (
    <Box display="flex" className={classes.wrapper}>
      <Box
        display="flex"
        sx={{
          width: "70%",
          height: 500,
        }}
        className={classes.cardLeft}
      ></Box>
      <Box
        display="flex"
        sx={{
          width: "30%",
          height: 500,
        }}
      >
        <Card className={classes.cardRight} sx={{ maxWidth: 400 }}>
          <CardContent>
            <Box style={{ marginTop: 5 }}>
              <Typography
                color="text.primary"
                sx={{ fontSize: 18, fontWeight: 500 ,textAlign:'left'}}
              >
                {t("RETURN")}
              </Typography>
            </Box>

            <Box
              className={classes.textMargin}
              onClick={() => navigate("/dashboard")}
            >
              <Button btntype={Buttons.PRIMARY} name={t("SIGN_IN")} />
            </Box>

            <Box className={classes.textMargin}>
              <Typography
                color="text.primary"
                sx={{ fontSize: 14,color:"red" ,textAlign:'left',fontWeight: 200 }}
              >
                {t("RECOVER_PASS")}
              </Typography>
            </Box>
            <Divider>or</Divider>

            <Box className={classes.textMargin}>
              <Button
                btntype={Buttons.PRIMARY}
                name={t("NEW_REGISTER")}
                onClick={() => navigate("/register")}
              />
            </Box>
            <Box className={classes.textMargin}>
              <Typography
                color="#1976d2"
                sx={{ fontSize: 14, fontWeight: 500 ,textAlign:'left'}}
              >
                {t("SIGN_IN_REGITER_VIDEOS")}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HomePage;

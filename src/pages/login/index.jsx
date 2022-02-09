import * as React from 'react';
import Card from '@mui/material/Card';
import { useTranslation } from 'react-i18next';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { getToDo } from '../../store/actions/auth';
import Button from '../../components/atoms/button';
import { Buttons } from '../../constant';
import useStyles from '../../custom-hooks/useStyles';
import Divider from '../../components/atoms/divider';
import styles from './style';

function HomePage() {
  const { t } = useTranslation();
  const classes = useStyles(styles)();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getToDo());
  }, []);
  return (
    <Box display="flex" className={classes.wrapper}>
      <Box
        display="flex"
        sx={{
          width: '70%',
          height: 500,
        }}
        className={classes.cardLeft}
      />
      <Box
        display="flex"
        sx={{
          width: '30%',
          height: 500,
        }}
      >
        <Card className={classes.cardRight} sx={{ maxWidth: 400 }}>
          <CardContent>
            <Box style={{ marginTop: 5 }}>
              <Typography
                color="text.primary"
                sx={{ fontSize: 18, fontWeight: 500, textAlign: 'left' }}
              >
                {t('RETURN')}
              </Typography>
            </Box>

            <Box
              className={classes.textMargin}
              onClick={() => navigate('/dashboard')}
            >
              <Button btntype={Buttons.PRIMARY} name={t('SIGN_IN')} />
            </Box>

            <Box className={classes.textMargin}>
              <Typography
                color="text.primary"
                sx={{
                  fontSize: 14,
                  color: 'red',
                  textAlign: 'left',
                  fontWeight: 200,
                }}
              >
                {t('RECOVER_PASS')}
              </Typography>
            </Box>
            <Divider>or</Divider>

            <Box className={classes.textMargin}>
              <Button
                btntype={Buttons.PRIMARY}
                name={t('NEW_REGISTER')}
                onClick={() => navigate('/register')}
              />
            </Box>
            <Box className={classes.textMargin}>
              <Typography
                color="#1976d2"
                sx={{ fontSize: 14, fontWeight: 500, textAlign: 'left' }}
              >
                {t('SIGN_IN_REGITER_VIDEOS')}
              </Typography>
            </Box>

            <Box className={classes.textMargin}>
              <Typography className={classes.contactUs}>
                {t('CONTACT_US')}
              </Typography>
            </Box>

            <Box display="flex" className={classes.textMargin}>
              <LocalPhoneIcon />
              <Typography className={classes.contactUsDes}>
                {9876543456}
              </Typography>
            </Box>

            <Box display="flex" className={classes.textMargin}>
              <MailIcon />
              <Typography className={classes.contactUsDes}>
                manabadi@siliconandhra.org
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default HomePage;

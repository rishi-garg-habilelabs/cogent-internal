import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// import { getData } from "../../services/auth";
import { Card, Typography, Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import useStyles from '../../custom-hooks/useStyles';
import styles from './style';
import useScreenWidth from '../../custom-hooks/useScreenWidth';
// import { getTenantDashboard } from './service';

function HomePage() {
  const { t } = useTranslation();
  const screenwidth = useScreenWidth();
  console.log('screenwidth', screenwidth - 100);
  const classes = useStyles(styles(screenwidth - 300))();
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
    <Grid
      container
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12} className={classes.mainHeading}>
        <Typography variant="h5">
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.cardTextAlign}>
          <CardHeader
            avatar={<AcUnitIcon />}
            title="Total Students"
            subheader={(
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/dashboard')}
              >
                {/* {stats.tenantCount} */}
              </span>
              )}
          />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.cardTextAlign}>
          <CardHeader
            avatar={<AcUnitIcon />}
            title="Register Students"
            subheader={(
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/dashboard', {
                  state: 'registered',
                })}
              >
                {/* {stats.registerTenants} */}
              </span>
              )}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default HomePage;

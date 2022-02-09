import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import style from './style';
// import { auth } from "../../services/auth";
import RegisterHeader from './header';
import ParentInfo from './parent-info';
import StudentInfo from './student-info';

function Register({ fields }) {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const classes = style();

  const steps = [
    `${t('PARENT_INFO')}`,
    `${t('STUDENT_INFO')}`,
    `${t('PAYMENT_INFO')}`,
  ];
  const handleStepper = (index) => {
    setActiveStep(index);
  };
  return (
    <div style={{ width: '100%' }}>
      <Box className={classes.header} mt={2}>
        <RegisterHeader
          activeStep={activeStep}
          steps={steps}
          handleStepper={handleStepper}
        />
      </Box>
      <Box>
        {activeStep === 0 ? (
          <ParentInfo fields={fields} />
        ) : (
          <StudentInfo fields={fields} />
        )}
      </Box>
    </div>
  );
}

export default Register;

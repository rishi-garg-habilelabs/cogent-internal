import React, { useState, useContext } from "react";
import { Card, Grid, CardContent, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import style from "./style";
import TextInput from "../../components/atoms/textfield";
// import { auth } from "../../services/auth";
import Button from "../../components/atoms/button";
import { Buttons } from "../../constant";
import FormBuilder from "../../components/molecules/form";
import { getUserLocale } from "../../utils/localStorageMethod";
import { checkFormValid } from "../../utils/validations";
import { handleSnackBar } from "../../utils/methods";
import { AuthContext } from "../../contexts/AuthProvider";
import  RegisterHeader  from "./header";
import ParentInfo from "./parent-info";
import { useTranslation } from "react-i18next";
import constant from "../../constant/config";
import StudentInfo from "./student-info/student-info";
const Register = ({ fields }) => {
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

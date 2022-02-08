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
import { RegisterHeader } from "../../components/molecules/header";
import ParentInfo from "./parent-info";
import { useTranslation } from "react-i18next";
import constant from "../../constant/config";
import StudentInfo from "./student-info/student-info";
const Register = ({ fields }) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const classes = style();
  const [formFields, setFormFields] = useState(fields);
  const { setLoading, setSnackbarConfig } = useContext(AuthContext);
  const [adressErrorCheckBox, setAdressErrorCheckBox] = useState({
    show: false,
    checked: false,
  });
  const onButtonAction = async (buttonKey) => {
    if (buttonKey === "save") {
      const result = checkFormValid(formFields);
      setFormFields(result.fields);
      if (result.isFormValid) {
        if (!adressErrorCheckBox.checked && constant.verifyAddress) {
          const countryValue = _.find(
            fields,
            (field) => field.key === "country"
          );
          const postCodeValue = _.find(
            fields,
            (field) => field.key === "postCode"
          );
          const streetValue = _.find(fields, (field) => field.key === "street");
          const streetNumberValue = _.find(
            fields,
            (field) => field.key === "number"
          );
          const cityValue = _.find(fields, (field) => field.key === "city");
          // const addressValid = isAddressValid({
          //   country: [countryValue.value],
          //   postalCode: [postCodeValue.value],
          //   addressLines: [
          //     streetValue.value,
          //     streetNumberValue.value,
          //     cityValue.value,
          //   ],
          // });
          // if (!addressValid) {
          //   setAdressErrorCheckBox({
          //     ...adressErrorCheckBox,
          //     show: true,
          //     checked: false,
          //   });
          //   return;
          // }
        }
        //   const payload = getPayloadObj(result.fields);
        //   try {
        //     setLoading(true);
        //     const response = await auth.register({
        //       ...payload,
        //       role: "PATIENT",
        //       lang: getUserLocale(),
        //     });
        //     if (response.data.message) {
        //       setLoading(false);
        //       setSnackbarConfig(
        //         handleSnackBar("fire", t("REGISTRATION_SUCCESSFUL"), "success")
        //       );
        //       navigate("/login");
        //     }
        //   } catch (error) {
        //     setLoading(false);
        //     setSnackbarConfig(
        //       handleSnackBar("fire", error.error || "Api error", "error")
        //     );
        //   }
      }
    } else if (buttonKey === "cancel") {
      navigate("/login");
    }
  };

  const onFieldChange = (index, key, value) => {
    const updatedFormFields = [...formFields];
    updatedFormFields[index].value = value;
    setFormFields(updatedFormFields);
  };
  // calling api

  // const payload = {};
  // const response = await auth.register({ ...payload});
  const steps = [
    `${t("PARENT_INFO")}`,
    `${t("STUDENT_INFO")}`,
    `${t("PAYMENT_INFO")}`,
  ];
  const handleStepper = (index) => {
    setActiveStep(index);
  };
  return (
    <div style={{ width: "100%" }}>
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
};

export default Register;

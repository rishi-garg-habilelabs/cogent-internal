import React, { useState } from "react";
import { Box, CircularProgress, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonAtom from "../../../components/atoms/button";
import TextFieldAtom from "../../../components/atoms/textfield";
import { Buttons } from "../../../constant";
import { useTranslation } from "react-i18next";
import { Paper } from "@mui/material";
import useStyles from "../../../custom-hooks/useStyles";
import styles from "./style";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        flexGrow: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function ParentInfo() {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    title: Yup.string(t("TITLE_REQUIRED")).required(t("TITLE_REQUIRED")),
    email: Yup.string(t("EMAIL_REQUIRED"))
      .email(t("EMAIL_INVALID"))
      .required(t("EMAIL_REQUIRED")),
    firstname: Yup.string(t("FIRSTNAME_REQUIRED")).required(
      t("FIRSTNAME_REQUIRED")
    ),
    lastname: Yup.string(t("LASTNAME_REQUIRED")).required(
      t("LASTNAME_REQUIRED")
    ),
    middlename: Yup.string(t("MIDDLENAME_REQUIRED")).required(
      t("MIDDLENAME_REQUIRED")
    ),
    contact: Yup.string(t("CONTACTNO_REQUIRED")).required(
      t("CONTACTNO_REQUIRED")
    ),
    profession: Yup.string(t("PROFESSION_REQUIRED")).required(
      t("PROFESSION_REQUIRED")
    ),
    company: Yup.string(t("NAMEOFCOMPANY_REQUIRED")).required(
      t("NAMEOFCOMPANY_REQUIRED")
    ),
  });

  const [inputFields, setInputFields] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  const classes = useStyles(styles)();

  async function saveData(values, setSubmitting) {
    console.log("values", values);
    if (setSubmitting) setSubmitting(true);
    setShowLoader(true);
    setShowMessage("Creating New User");
    setInputFields(inputFields);
  }
  return (
    <Paper style={{ width: "100%" }}>
      <Formik
        enableReinitialize
        initialValues={inputFields}
        onSubmit={(values, { setSubmitting }) => {
          console.log("valuesvalues", values);
          saveData(values, setSubmitting);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          dirty,
          isValid,
          touched,
          isSubmitting,
          setValues,
          setErrors,
          setFieldTouched,
          handleSubmit,
          handleBlur,
          handleChange,
          setSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            name="tenantUserForm"
            noValidate
            autoComplete="off"
          >
            <Box
              className={classes.title}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              {t("PARENT_INFO")}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Item>
                <TextFieldAtom
                  label={t("TITLE")}
                  id="title"
                  name="title"
                  type="text"
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      title: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.title}
                  errorText={errors.title}
                />
              </Item>
              <Item>
                <TextFieldAtom
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={values.firstname}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      firstname: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.firstname}
                  errorText={errors.firstname}
                  label={t("FIRSTNAME")}
                />
              </Item>
              <Item>
                <TextFieldAtom
                  label={t("MIDDLENAME")}
                  id="middlename"
                  name="middlename"
                  type="text"
                  value={values.middlename}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      middlename: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.middlename}
                  errorText={errors.middlename}
                />
              </Item>
              <Item>
                <TextFieldAtom
                  label={t("LASTNAME")}
                  id="lastname"
                  name="lastname"
                  type="text"
                  value={values.lastname}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      lastname: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.lastname}
                  errorText={errors.lastname}
                />
              </Item>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Item>
                <TextFieldAtom
                  label={t("EMAIL")}
                  id="email"
                  name="email"
                  type="text"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      email: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.email}
                  errorText={errors.email}
                />
              </Item>
              <Item>
                <TextFieldAtom
                  label={t("CONTACTNO")}
                  id="contact"
                  name="contact"
                  type="text"
                  value={values.contact}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      contact: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.contact}
                  errorText={errors?.contact}
                />
              </Item>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Item>
                <TextFieldAtom
                  label={t("PROFESSION")}
                  id="profession"
                  name="profession"
                  type="text"
                  value={values.profession}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      profession: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.profession}
                  errorText={errors?.profession}
                />
              </Item>
              <Item>
                <TextFieldAtom
                  label={t("NAMEOFCOMPANY")}
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      company: event.target.value.trim(),
                    });
                  }}
                  fullWidth
                  error={errors?.company}
                  errorText={errors?.company}
                />
              </Item>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <ButtonAtom
                btntype={Buttons.PRIMARY}
                className={classes.activeButton}
                // disabled={isSubmitting || !isValid || !dirty}
                onClick={handleSubmit}
                name={"SAVE"}
              ></ButtonAtom>
            </Box>

            {showLoader && (
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  height: "100vh",
                  top: "0",
                  left: "0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "fixed",
                  background: "rgba(0,0,0,0.3)",
                  zIndex: "9",
                }}
              >
                <CircularProgress color="inherit" />
                <h5>{showMessage}</h5>
              </Box>
            )}
          </form>
        )}
      </Formik>
    </Paper>
  );
}

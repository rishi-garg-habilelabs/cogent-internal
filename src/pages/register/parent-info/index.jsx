/* eslint-disable no-multi-spaces */
import React, { useState } from 'react';
import {
  Paper, Box, CircularProgress, Grid, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import TextFieldAtom from '../../../components/atoms/textfield';
import { Buttons } from '../../../constant';
import useStyles from '../../../custom-hooks/useStyles';
import ButtonAtom from '../../../components/atoms/button';
import styles, { loaderStyle } from  './style';

export default function ParentInfo() {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    parentOneTitle: Yup.string(t('TITLE_REQUIRED')).required(
      t('TITLE_REQUIRED'),
    ),
    parentOneEmail: Yup.string(t('EMAIL_REQUIRED'))
      .email(t('EMAIL_INVALID'))
      .required(t('EMAIL_REQUIRED')),
    parentOneFirstName: Yup.string(t('FIRSTNAME_REQUIRED')).required(
      t('FIRSTNAME_REQUIRED'),
    ),
    parentOneLastName: Yup.string(t('LASTNAME_REQUIRED')).required(
      t('LASTNAME_REQUIRED'),
    ),
    parentOneContact: Yup.string(t('CONTACTNO_REQUIRED')).required(
      t('CONTACTNO_REQUIRED'),
    ),
    parentOneProfession: Yup.string(t('PROFESSION_REQUIRED')).required(
      t('PROFESSION_REQUIRED'),
    ),
    parentOneCompany: Yup.string(t('NAMEOFCOMPANY_REQUIRED')).required(
      t('NAMEOFCOMPANY_REQUIRED'),
    ),

    parentTwoTitle: Yup.string(t('TITLE_REQUIRED')).required(
      t('TITLE_REQUIRED'),
    ),
    parentTwoEmail: Yup.string(t('EMAIL_REQUIRED'))
      .email(t('EMAIL_INVALID'))
      .required(t('EMAIL_REQUIRED')),
    parentTwoFirstName: Yup.string(t('FIRSTNAME_REQUIRED')).required(
      t('FIRSTNAME_REQUIRED'),
    ),
    parentTwoLastName: Yup.string(t('LASTNAME_REQUIRED')).required(
      t('LASTNAME_REQUIRED'),
    ),
    parentTwoContact: Yup.string(t('CONTACTNO_REQUIRED')).required(
      t('CONTACTNO_REQUIRED'),
    ),
    parentTwoProfession: Yup.string(t('PROFESSION_REQUIRED')).required(
      t('PROFESSION_REQUIRED'),
    ),
    parentTwoCompany: Yup.string(t('NAMEOFCOMPANY_REQUIRED')).required(
      t('NAMEOFCOMPANY_REQUIRED'),
    ),

    homeAddress: Yup.string(t('HOMEADDRESS_REQUIRED')).required(
      t('HOMEADDRESS_REQUIRED'),
    ),
    volunteer: Yup.string(t('VOLUNTEER_REQUIRED')).required(
      t('VOLUNTEER_REQUIRED'),
    ),
    hearAboutUs: Yup.string(t('HEARABOUT_REQUIRED')).required(
      t('HEARABOUT_REQUIRED'),
    ),
  });

  const [inputFields, setInputFields] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [showMessage, setShowMessage] = useState('');
  const textField = (
    label,
    id,
    type,
    setValues,
    value,
    handleBlur,
    values,
    error,
    errorText,
  ) => (
    <TextFieldAtom
      label={label}
      id={id}
      name={id}
      type={type}
      value={value}
      onBlur={handleBlur}
      onChange={(event) => {
        setValues({
          ...values,
          parentOneTitle: event.target.value.trim(),
        });
      }}
      error={error}
      errorText={errorText}
    />
  );

  const classes = useStyles(styles)();
  const setTitle = (title) => (
    <Grid container className={classes.heading}>
      <Grid item xs={12}>
        <Typography component="div" gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );

  async function saveData(values, setSubmitting) {
    if (setSubmitting) setSubmitting(true);
    setShowLoader(true);
    setShowMessage('Creating New User');
    setInputFields(inputFields);
  }
  return (
    <Paper style={{ width: '100%' }}>
      <Formik
        enableReinitialize
        initialValues={inputFields}
        onSubmit={(values, { setSubmitting }) => {
          saveData(values, setSubmitting);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          setValues,
          handleSubmit,
          handleBlur,
        }) => (
          <form
            onSubmit={handleSubmit}
            name="tenantUserForm"
            noValidate
            autoComplete="off"
          >
            <Box sx={{ flexGrow: 1, padding: '3%' }}>
              {setTitle(t('PARENT_ONE'))}
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  {textField(t('TITLE'), 'parentOneTitle', 'text', setValues, values.parentOneTitle, handleBlur, values, errors?.parentOneTitle, errors.parentOneTitle)}
                </Grid>
                <Grid item xs={3}>
                  {textField(t('FIRSTNAME'), 'parentOneFirstName', 'text', setValues, values.parentOneFirstName, handleBlur, values, errors?.parentOneFirstName, errors.parentOneFirstName)}
                </Grid>
                <Grid item xs={3}>
                  {textField(t('MIDDLENAME'), 'middlename', 'text', setValues, values.middlename, handleBlur, values, '', '')}
                </Grid>
                <Grid item xs={3}>
                  {textField(t('LASTNAME'), 'parentOneLastName', 'text', setValues, values.parentOneLastName, handleBlur, values, errors?.parentOneLastName, errors.parentOneLastName)}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {textField(t('EMAIL'), 'parentOneEmail', 'text', setValues, values.parentOneEmail, handleBlur, values, errors?.parentOneEmail, errors.parentOneEmail)}
                </Grid>
                <Grid item xs={6}>
                  {textField(t('CONTACTNO'), 'parentOneContact', 'text', setValues, values.parentOneContact, handleBlur, values, errors?.parentOneContact, errors.parentOneContact)}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {textField(t('PROFESSION'), 'parentOneProfession', 'text', setValues, values.parentOneProfession, handleBlur, values, errors?.parentOneProfession, errors.parentOneProfession)}
                </Grid>
                <Grid item xs={6}>
                  {textField(t('NAMEOFCOMPANY'), 'parentOneCompany', 'text', setValues, values.parentOneCompany, handleBlur, values, errors?.parentOneCompany, errors.parentOneCompany)}
                </Grid>
              </Grid>

              {/* Parent 2 */}
              {setTitle(t('PARENT_TWO'))}
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  {textField(t('TITLE'), 'parentTwoTitle', 'text', setValues, values.parentTwoTitle, handleBlur, values, errors?.parentTwoTitle, errors.parentTwoTitle)}
                </Grid>
                <Grid item xs={3}>

                  {textField(t('FIRSTNAME'), 'parentTwoFirstName', 'text', setValues, values.parentTwoFirstName, handleBlur, values, errors?.parentTwoFirstName, errors.parentTwoFirstName)}

                </Grid>
                <Grid item xs={3}>
                  {textField(t('MIDDLENAME'), 'parentTwoMiddleName', 'text', setValues, values.parentTwoMiddleName, handleBlur, values, errors?.parentTwoMiddleName, errors.parentTwoMiddleName)}
                </Grid>
                <Grid item xs={3}>
                  {textField(t('LASTNAME'), 'parentTwoLastName', 'text', setValues, values.parentTwoLastName, handleBlur, values, errors?.parentTwoLastName, errors.parentTwoLastName)}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {textField(t('EMAIL'), 'parentTwoEmail', 'text', setValues, values.parentTwoEmail, handleBlur, values, errors?.parentTwoEmail, errors.parentTwoEmail)}
                </Grid>
                <Grid item xs={6}>
                  {textField(t('CONTACTNO'), 'parentTwoContact', 'text', setValues, values.parentTwoContact, handleBlur, values, errors?.parentTwoContact, errors.parentTwoContact)}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {textField(t('PROFESSION'), 'parentTwoProfession', 'text', setValues, values.parentTwoProfession, handleBlur, values, errors?.parentTwoProfession, errors.parentTwoProfession)}
                </Grid>
                <Grid item xs={6}>
                  {textField(t('NAMEOFCOMPANY'), 'parentTwoCompany', 'text', setValues, values.parentTwoCompany, handleBlur, values, errors?.parentTwoCompany, errors.parentTwoCompany)}

                </Grid>
              </Grid>
              {/*
          Additional Info */}

              {setTitle(t('ADDITIONAL_INFO'))}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {textField(t('HOMEADDRESS'), 'homeAddress', 'text', setValues, values.homeAddress, handleBlur, values, errors?.homeAddress, errors.homeAddress)}
                </Grid>
                <Grid item xs={6}>
                  {textField(t('APISUITE'), 'apiSuite', 'text', setValues, values.apiSuite, handleBlur, values, errors?.apiSuite, errors.apiSuite)}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {textField(t('VOLUNTEER'), 'volunteer', 'text', setValues, values.volunteer, handleBlur, values, errors?.volunteer, errors.volunteer)}
                </Grid>
                <Grid item xs={6}>
                  {textField(t('HEARABOUT'), 'hearAboutUs', 'text', setValues, values.hearAboutUs, handleBlur, values, errors?.hearAboutUs, errors.hearAboutUs)}

                </Grid>
              </Grid>

              <Grid container spacing={2} justifyContent="end">
                <Grid item>
                  <ButtonAtom
                    btntype={Buttons.PRIMARY}
                    className={classes.activeButton}
                // disabled={isSubmitting || !isValid || !dirty}
                    onClick={handleSubmit}
                    name={t('SAVE_CONTINUE')}
                  />
                </Grid>
              </Grid>

              {showLoader && (
              <Box
                style={loaderStyle}
              >
                <CircularProgress color="inherit" />
                <h5>{showMessage}</h5>
              </Box>
              )}
            </Box>
          </form>
        )}
      </Formik>
    </Paper>
  );
}

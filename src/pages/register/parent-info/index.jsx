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
import styles from './style';

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
    console.log('values', values);
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
          console.log('valuesvalues', values);
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
                  <TextFieldAtom
                    label={t('TITLE')}
                    id="parentOneTitle"
                    name="parentOneTitle"
                    type="text"
                    value={values.parentOneTitle}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentOneTitle: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentOneTitle}
                    errorText={errors.parentOneTitle}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldAtom
                    id="parentOneFirstName"
                    name="parentOneFirstName"
                    type="text"
                    value={values.parentOneFirstName}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentOneFirstName: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentOneFirstName}
                    errorText={errors.parentOneFirstName}
                    label={t('FIRSTNAME')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldAtom
                    label={t('MIDDLENAME')}
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
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldAtom
                    label={t('LASTNAME')}
                    id="parentOneLastName"
                    name="parentOneLastName"
                    type="text"
                    value={values.parentOneLastName}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentOneLastName: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentOneLastName}
                    errorText={errors.parentOneLastName}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('EMAIL')}
                    id="parentOneEmail"
                    name="parentOneEmail"
                    type="text"
                    value={values.parentOneEmail}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentOneEmail: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentOneEmail}
                    errorText={errors.parentOneEmail}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('CONTACTNO')}
                    id="parentOneContact"
                    name="parentOneContact"
                    type="text"
                    value={values.parentOneContact}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentOneContact: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentOneContact}
                    errorText={errors?.parentOneContact}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('PROFESSION')}
                    id="parentOneProfession"
                    name="parentOneProfession"
                    type="text"
                    value={values.parentOneProfession}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentOneProfession: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentOneProfession}
                    errorText={errors?.parentOneProfession}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('NAMEOFCOMPANY')}
                    id="parentOneCompany"
                    name="parentOneCompany"
                    type="text"
                    value={values.parentOneCompany}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentOneCompany: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentOneCompany}
                    errorText={errors?.parentOneCompany}
                  />
                </Grid>
              </Grid>

              {/* Parent 2 */}
              {setTitle(t('PARENT_TWO'))}
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextFieldAtom
                    label={t('TITLE')}
                    id="parentTwoTitle"
                    name="parentTwoTitle"
                    type="text"
                    value={values.parentTwoTitle}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoTitle: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentTwoTitle}
                    errorText={errors.parentTwoTitle}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldAtom
                    id="parentTwoFirstName"
                    name="parentTwoFirstName"
                    type="text"
                    value={values.parentTwoFirstName}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoFirstName: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentTwoFirstName}
                    errorText={errors.parentTwoFirstName}
                    label={t('FIRSTNAME')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldAtom
                    label={t('MIDDLENAME')}
                    id="parentTwoMiddleName"
                    name="parentTwoMiddleName"
                    type="text"
                    value={values.parentTwoMiddleName}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoMiddleName: event.target.value.trim(),
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextFieldAtom
                    label={t('LASTNAME')}
                    id="parentTwoLastName"
                    name="parentTwoLastName"
                    type="text"
                    value={values.parentTwoLastName}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoLastName: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentTwoLastName}
                    errorText={errors.parentTwoLastName}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('EMAIL')}
                    id="parentTwoEmail"
                    name="parentTwoEmail"
                    type="text"
                    value={values.parentTwoEmail}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoEmail: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentTwoEmail}
                    errorText={errors.parentTwoEmail}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('CONTACTNO')}
                    id="parentTwoContact"
                    name="parentTwoContact"
                    type="text"
                    value={values.parentTwoContact}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoContact: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentTwoContact}
                    errorText={errors?.parentTwoContact}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('PROFESSION')}
                    id="parentTwoProfession"
                    name="parentTwoProfession"
                    type="text"
                    value={values.parentTwoProfession}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoProfession: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentTwoProfession}
                    errorText={errors?.parentTwoProfession}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('NAMEOFCOMPANY')}
                    id="parentTwoCompany"
                    name="parentTwoCompany"
                    type="text"
                    value={values.parentTwoCompany}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        parentTwoCompany: event.target.value.trim(),
                      });
                    }}
                    error={errors?.parentTwoCompany}
                    errorText={errors?.parentTwoCompany}
                  />
                </Grid>
              </Grid>
              {/*
          Additional Info */}

              {setTitle(t('ADDITIONAL_INFO'))}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('HOMEADDRESS')}
                    id="homeAddress"
                    name="homeAddress"
                    type="text"
                    value={values.homeAddress}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        homeAddress: event.target.value.trim(),
                      });
                    }}
                    error={errors?.homeAddress}
                    errorText={errors.homeAddress}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldAtom
                    id="apiSuite"
                    name="apiSuite"
                    type="apiSuite"
                    value={values.apiSuite}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        apiSuite: event.target.value.trim(),
                      });
                    }}
                    error={errors?.apiSuite}
                    errorText={errors.apiSuite}
                    label={t('APISUITE')}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('VOLUNTEER')}
                    id="volunteer"
                    name="volunteer"
                    type="text"
                    value={values.volunteer}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        volunteer: event.target.value.trim(),
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('HEARABOUT')}
                    id="hearAboutUs"
                    name="hearAboutUs"
                    type="text"
                    value={values.hearAboutUs}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        hearAboutUs: event.target.value.trim(),
                      });
                    }}
                    error={errors?.hearAboutUs}
                    errorText={errors.hearAboutUs}
                  />
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
                style={{
                  width: '100%',
                  display: 'flex',
                  height: '100vh',
                  top: '0',
                  left: '0',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  position: 'fixed',
                  background: 'rgba(0,0,0,0.3)',
                  zIndex: '9',
                }}
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

import React, { useState } from 'react';
import {
  Box, CircularProgress, Paper, Grid,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import ButtonAtom from '../../../components/atoms/button';
import TextFieldAtom from '../../../components/atoms/textfield';
import SelectAtom from '../../../components/atoms/selectbox';
import { Buttons } from '../../../constant';
import useStyles from '../../../custom-hooks/useStyles';
import styles from './style';

export default function StudentInfo() {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    title: Yup.string(t('TITLE_REQUIRED')).required(t('TITLE_REQUIRED')),
    email: Yup.string(t('EMAIL_REQUIRED'))
      .email(t('EMAIL_INVALID'))
      .required(t('EMAIL_REQUIRED')),
    firstname: Yup.string(t('FIRSTNAME_REQUIRED')).required(
      t('FIRSTNAME_REQUIRED'),
    ),
    lastname: Yup.string(t('LASTNAME_REQUIRED')).required(
      t('LASTNAME_REQUIRED'),
    ),
    contact: Yup.string(t('CONTACTNO_REQUIRED')).required(
      t('CONTACTNO_REQUIRED'),
    ),
    profession: Yup.string(t('PROFESSION_REQUIRED')).required(
      t('PROFESSION_REQUIRED'),
    ),
    company: Yup.string(t('NAMEOFCOMPANY_REQUIRED')).required(
      t('NAMEOFCOMPANY_REQUIRED'),
    ),
  });

  const [inputFields, setInputFields] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [showMessage, setShowMessage] = useState('');

  const classes = useStyles(styles)();

  async function saveData(values, setSubmitting) {
    if (setSubmitting) setSubmitting(true);
    setShowLoader(true);
    setShowMessage('Creating New Student');
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
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextFieldAtom
                    label={t('TITLE')}
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
                    error={errors?.title}
                    errorText={errors.title}
                  />
                </Grid>
                <Grid item xs={3}>

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
                    error={errors?.firstname}
                    errorText={errors.firstname}
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
                    error={errors?.lastname}
                    errorText={errors.lastname}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SelectAtom
                    minWidth="100%"
                    label={t('GENDER')}
                    id="email"
                    name="gender"
                    type="text"
                    value={values.gender}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        gender: event.target.value.trim(),
                      });
                    }}
                    error={errors?.gender}
                    errorText={errors.gender}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SelectAtom
                    minWidth="100%"
                    label={t('TSHIRT')}
                    id="tShirt"
                    name="tShirt"
                    type="text"
                    value={values.tShirt}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        tShirt: event.target.value.trim(),
                      });
                    }}
                    error={errors?.tShirt}
                    errorText={errors?.tShirt}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SelectAtom
                    minWidth="100%"
                    label={t('GRADE')}
                    id="grade"
                    name="grade"
                    type="text"
                    value={values.grade}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        grade: event.target.value.trim(),
                      });
                    }}
                    error={errors?.grade}
                    errorText={errors.grade}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextFieldAtom
                    label={t('SEARCH_SCHOOL')}
                    id="searchSchool"
                    name="searchSchool"
                    type="text"
                    value={values.searchSchool}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        searchSchool: event.target.value.trim(),
                      });
                    }}
                    error={errors?.searchSchool}
                    errorText={errors?.searchSchool}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SelectAtom
                    minWidth="100%"
                    label={t('SORTED_NEAREST')}
                    id="sortedNearest"
                    name="sortedNearest"
                    type="text"
                    value={values.sortedNearest}
                    onBlur={handleBlur}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        sortedNearest: event.target.value.trim(),
                      });
                    }}
                    error={errors?.sortedNearest}
                    errorText={errors.sortedNearest}
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid>
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
          </form>
        )}
      </Formik>
    </Paper>
  );
}

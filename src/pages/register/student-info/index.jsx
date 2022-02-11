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
import DatePickerAtom from '../../../components/atoms/datepicker';
import styles from './style';
import { loaderStyle } from '../parent-info/style';

export default function StudentInfo() {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    firstName: Yup.string(t('FIRSTNAME_REQUIRED')).required(
      t('FIRSTNAME_REQUIRED'),
    ),
    lastName: Yup.string(t('LASTNAME_REQUIRED')).required(
      t('LASTNAME_REQUIRED'),
    ),
    // dateOfBirth: Yup.string(t('DOB_REQUIRED')).required(
    //   t('DOB_REQUIRED'),
    // ),
    gender: Yup.string(t('GENDER_REQUIRED')).required(
      t('GENDER_REQUIRED'),
    ),
    tShirt: Yup.string(t('TSHIRT_REQUIRED')).required(
      t('TSHIRT_REQUIRED'),
    ),
    grade: Yup.string(t('GRADE_REQUIRED')).required(
      t('GRADE_REQUIRED'),
    ),
    sortedNearest: Yup.string(t('SORTED_REQUIRED')).required(
      t('SORTED_REQUIRED'),
    ),
    academicYear: Yup.string(t('ACADEMICYEAR_REQUIRED')).required(
      t('ACADEMICYEAR_REQUIRED'),
    ),
    classLevel: Yup.string(t('CLASSLEVEL_REQUIRED')).required(
      t('CLASSLEVEL_REQUIRED'),
    ),
  });

  const [inputFields, setInputFields] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [showMessage, setShowMessage] = useState('');

  const classes = useStyles(styles)();
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
          [id]: event.target.value.trim(),
        });
      }}
      error={error}
      errorText={errorText}
    />
  );

  const selectBox = (
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
    <SelectAtom
      minWidth="100%"
      label={label}
      id={id}
      name={id}
      type={type}
      value={value}
      // onBlur={handleBlur}
      onChange={(event) => {
        setValues({
          ...values,
          [id]: event.target.value.trim(),
        });
      }}
      error={error}
      errorText={errorText}
    />
  );

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
            <Grid container spacing={2} display="flex" flexDirection="row">
              <Grid item xs={4} className={classes.gridContainer}>

                <Grid item xs={12}>
                  {selectBox(t('ACADEMICYEAR'), 'academicYear', 'text', setValues, values.academicYear, handleBlur, values, errors?.academicYear, errors.academicYear)}
                </Grid>
                <Grid item xs={12}>
                  {selectBox(t('CLASSLEVEL'), 'classLevel', 'text', setValues, values.classLevel, handleBlur, values, errors?.classLevel, errors.classLevel)}
                </Grid>

              </Grid>
              <Grid item xs={8} className={classes.gridContainer}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    {textField(t('FIRSTNAME'), 'firstName', 'text', setValues, values.firstName, handleBlur, values, errors?.firstName, errors.firstName)}
                  </Grid>
                  <Grid item xs={4}>
                    {textField(t('MIDDLENAME'), 'middleName', 'text', setValues, values.middleName, handleBlur, values, errors?.middleName, errors.middleName)}
                  </Grid>
                  <Grid item xs={4}>
                    {textField(t('LASTNAME'), 'lastName', 'text', setValues, values.lastName, handleBlur, values, errors?.lastName, errors.lastName)}
                  </Grid>
                  <Grid item xs={4}>
                    <DatePickerAtom
                      wrapperClassName={classes.datePicker}
                      label={t('DOB')}
                      minWidth="100%"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="text"
                      value={values.dateOfBirth}
                      // onBlur={handleBlur}
                      onChange={(event) => {
                        setValues({
                          ...values,
                          dateOfBirth: event,
                        });
                      }}
                      error={errors?.dateOfBirth}
                      errorText={errors.dateOfBirth}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    {selectBox(t('GENDER'), 'gender', 'text', setValues, values.gender, handleBlur, values, errors?.gender, errors.gender)}
                  </Grid>
                  <Grid item xs={4}>
                    {selectBox(t('TSHIRT'), 'tShirt', 'text', setValues, values.tShirt, handleBlur, values, errors?.tShirt, errors.tShirt)}
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {selectBox(t('GRADE'), 'grade', 'text', setValues, values.grade, handleBlur, values, errors?.grade, errors.grade)}

                  </Grid>
                  <Grid item xs={6}>
                    {textField(t('SEARCH_SCHOOL'), 'searchSchool', 'text', setValues, values.searchSchool, handleBlur, values, errors?.searchSchool, errors.searchSchool)}
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {selectBox(t('SORTED_NEAREST'), 'sortedNearest', 'text', setValues, values.sortedNearest, handleBlur, values, errors?.sortedNearest, errors.sortedNearest)}
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item>Map</Grid>

                </Grid>
                <Grid container spacing={2} justifyContent="flex-end">
                  <Grid item>
                    <ButtonAtom
                      btntype={Buttons.SECONDARY}
                      className={classes.activeButton}
                      onClick={handleSubmit}
                      name={t('ADD_SIBLING')}
                    />
                    <ButtonAtom
                      btntype={Buttons.PRIMARY}
                      className={classes.activeButton}
                // disabled={isSubmitting || !isValid || !dirty}
                      onClick={handleSubmit}
                      name={t('SAVE_CONTINUE')}
                    />
                  </Grid>
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
            </Grid>
          </form>
        )}
      </Formik>
    </Paper>
  );
}

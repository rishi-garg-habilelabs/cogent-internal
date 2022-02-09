import React, { useState } from 'react';
import { Card, Grid, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './style';
import Button from '../../../components/atoms/button';
import { Buttons } from '../../../constant';
import FormBuilder from '../../../components/molecules/form';
import { checkFormValid } from '../../../utils/validations';

function ParentInfo({ fields }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const classes = style();
  const [formFields, setFormFields] = useState(fields);
  const [adressErrorCheckBox, setAdressErrorCheckBox] = useState({
    show: false,
    checked: false,
  });
  const onButtonAction = async (buttonKey) => {
    if (buttonKey === 'save') {
      const result = checkFormValid(formFields);
      setFormFields(result.fields);
    } else if (buttonKey === 'cancel') {
      navigate('/login');
    }
  };

  const onFieldChange = (index, key, value) => {
    const updatedFormFields = [...formFields];
    updatedFormFields[index].value = value;
    setFormFields(updatedFormFields);
  };
  return (
    <Card>
      <CardContent>
        <Grid
          container
          className={classes.root}
          spacing="4"
          justifyContent="center"
        >
          <Grid container spacing="4" justifyContent="flex-end">
            <Grid item className={classes.title} xs={12}>
              {t('PARENT_INFO')}
            </Grid>
            <Grid item xs={8}>
              <FormBuilder
                formFields={formFields}
                onButtonAction={onButtonAction}
                onFieldChange={onFieldChange}
                adressErrorCheckBox={adressErrorCheckBox}
                onAddressCheckBoxChange={(con) => setAdressErrorCheckBox({
                  ...adressErrorCheckBox,
                  checked: con,
                })}
              />
            </Grid>
          </Grid>

          <Grid
            container
            className={classes.button}
            spacing="4"
            justifyContent="flex-end"
          >
            <Grid item>
              <Button name="Save" btntype={Buttons.PRIMARY} onClick="" />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ParentInfo;

import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from 'react-i18next';
import style from './style';
import useStyles from '../../../custom-hooks/useStyles';

function TextFieldAtom({
  label, name, value, onChange, InputProps, multiline, rows, onBlur,
  customFormControlCss, type, required, variant, placeholder, error,
  errorText, disable, onKeyUp, title, minWidth,
}) {
  const classes = useStyles(style)();
  const { t } = useTranslation();
  return (
    // eslint-disable-next-line max-len
    <FormControl sx={{ m: 1, minWidth }} className={classes.formControl} style={customFormControlCss}>
      <TextField
        id={name}
        value={value}
        label={label}
        onChange={onChange}
        InputProps={InputProps}
        type={type}
        required={required}
        variant={variant}
        placeholder={placeholder}
        error={error}
        helperText={t(errorText)}
        disabled={disable}
        onKeyUp={onKeyUp}
        multiline={multiline}
        rows={rows}
        title={t(title)}
        onBlur={onBlur}
      />
    </FormControl>
  );
}

TextFieldAtom.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  InputProps: PropTypes.objectOf(Object),
  customFormControlCss: PropTypes.objectOf(Object),
  type: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  disable: PropTypes.bool,
  onKeyUp: PropTypes.func,
  multiline: PropTypes.bool,
  rows: PropTypes.string,
  title: PropTypes.string,
  onBlur: PropTypes.func,
};

TextFieldAtom.defaultProps = {
  label: '',
  InputProps: {},
  customFormControlCss: {},
  type: 'text',
  required: true,
  variant: 'outlined',
  placeholder: '',
  error: false,
  errorText: '',
  disable: false,
  onKeyUp: '',
  multiline: false,
  rows: '',
  title: '',
  onBlur: () => {},
};

export default TextFieldAtom;

/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ArrowDropdown from '@mui/icons-material/KeyboardArrowDown';

import style from './style';

function Dropdown({
  handleChange, label, labelId, id, options, value, placeholder, variant, error, errorText, changeCss, disabled,
}) {
  const classes = style();
  const { t } = useTranslation();
  return (
    <FormControl className={`${classes.formControl} ${changeCss ? classes.dropdownUi : ' '}`}>
      <InputLabel id={labelId}>{t(label)}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        name={id}
        onChange={handleChange}
        variant={variant}
        placeholder={placeholder}
        error={error}
        IconComponent={ArrowDropdown}
        disabled={disabled}
      >
        {options?.length ? options.map((opt) => (
          <MenuItem
            key={opt.value}
            value={opt.value}
            className={classes.menuItem}
          >
            {t(opt.label)}
          </MenuItem>
        )) : (
          <MenuItem>
            {t('NO_OPTIONS_AVAILABLE')}
          </MenuItem>
        )}
      </Select>
      <span className={classes.errorText}>
        { error ? t(errorText) : ''}
      </span>
    </FormControl>

  );
}

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(Object),
  value: PropTypes.string,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  options: [],
  value: '',
  variant: 'outlined',
  placeholder: '',
  error: false,
  errorText: '',
  disabled: false,
};

export default Dropdown;

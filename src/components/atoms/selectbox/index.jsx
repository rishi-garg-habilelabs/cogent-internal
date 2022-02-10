import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useStyles from '../../../custom-hooks/useStyles';
import styles from './style';

export default function SelectAutoWidth(props) {
  const {
    optionList, handleSelect, value, label, minWidth, error,
  } = props;

  const classes = useStyles(styles)();

  return (
    <div className={classes.formControl}>
      <FormControl required sx={{ minWidth }} error={error}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleSelect}
          error={error}
          label={label}
        >
          {!optionList ? (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          ) : (
            <>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </>
          )}
        </Select>
      </FormControl>

    </div>
  );
}

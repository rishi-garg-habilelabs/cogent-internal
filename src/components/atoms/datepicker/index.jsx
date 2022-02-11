import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import useStyles from '../../../custom-hooks/useStyles';
import styles from './style';

export default function ViewsDatePicker(props) {
  const {
    label, value, onChange, wrapperClassName,
  } = props;

  const classes = useStyles(styles)();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={classes.wrapper}>
        <DatePicker
          wrapperClassName={wrapperClassName}
          views={['day']}
          label={label}
          value={value ? new Date(value) : new Date()}
          onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </div>
    </LocalizationProvider>
  );
}

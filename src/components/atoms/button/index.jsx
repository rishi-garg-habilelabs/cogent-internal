import React from 'react';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import useStyles from '../../../custom-hooks/useStyles';
import styles from './style';
import BTN from '../../../constant/buttonTypes';

export default function ButtonAtom(props) {
  const {
    onClick, name, disabled, btntype, icon, type, className, customCss,
  } = props;
  const classes = useStyles(styles)();

  const getClass = (btype) => {
    if (btype === BTN.PRIMARY) return classes.primaryButton;
    if (btype === BTN.SECONDARY) return classes.secButton;
    return classes.customizedButton;
  };

  return (
    <Button
      style={customCss}
      type={type}
      className={clsx(className, getClass(btntype))}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
      <span>{icon}</span>
    </Button>
  );
}

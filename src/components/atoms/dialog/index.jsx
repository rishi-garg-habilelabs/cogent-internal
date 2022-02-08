import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import _ from 'lodash';
import style from './style';

function DialogAtom({
  openDialig, onDialogAction, dialogHeading, isSucessfull, content, showOk,
}) {
  const classes = style();
  const { t } = useTranslation();
  const [open, setOpen] = useState(_.cloneDeep(openDialig));

  useEffect(() => {
    if (openDialig) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [openDialig]);

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.dialog}
    >
      <DialogTitle id="alert-dialog-title">
        {dialogHeading}
      </DialogTitle>
      {content}
      <DialogActions className={classes.dialogButtons}>
        {showOk && (
        <Button
          color="primary"
          onClick={() => onDialogAction('yes')}
        >
          {isSucessfull ? t('OK') : t('YES')}
        </Button>
        )}
        {
!isSucessfull
       && (
       <Button
         onClick={() => onDialogAction('no')}
         color="primary"
         autoFocus
       >
         {t('NO')}
       </Button>
       )
}
      </DialogActions>
    </Dialog>
  );
}

DialogAtom.propTypes = {
  openDialig: PropTypes.bool,
  onDialogAction: PropTypes.func,
  dialogHeading: PropTypes.string,
  isSucessfull: PropTypes.bool,
  content: '',
  showOk: PropTypes.bool,
};

DialogAtom.defaultProps = {
  openDialig: false,
  onDialogAction: '',
  dialogHeading: '',
  isSucessfull: false,
  content: '',
  showOk: true,
};

export default DialogAtom;

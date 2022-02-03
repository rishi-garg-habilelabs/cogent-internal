import makeStyles from '@mui/styles/makeStyles';

const style = makeStyles(() => ({
  dialog: {
    '& .MuiDialog-paper': {
      minHeight: 100,
      margin: 0,
      maxWidth: 700,
      boxShadow: 'none',
      borderRadius: 8,
      width: 700,
      boxSizing: 'border-box',
      padding: 20,
      '@media (max-width: 767px)': {
        width: '95%',
      },
      '& div[class*="-formControl-"]': {
        margin: '0',
      },
    },
    '& .MuiDialogTitle-root': {
      color: '#000',
      padding: '5px 0 20px',
      fontFamily: 'DINNextLTPro-Bold',
    },
    '& .MuiButton-textPrimary': {
      color: 'rgb(0, 148, 144)',
    },
  },
  dialogButtons: {
    margin: '40px 0 30px',
    justifyContent: 'flex-start',
    padding: 0,
    '& button': {
      backgroundColor: '#9cc',
      color: '#fff !important',
      padding: '10px 30px',
      '&:hover': {
        backgroundColor: '#019491',
      },
    },
  },
}));

export default style;

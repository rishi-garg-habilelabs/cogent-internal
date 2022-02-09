import makeStyles from '@mui/styles/makeStyles';

const style = makeStyles(() => ({
  formControl: {
    marginLeft: '0px',
    marginTop: 10,
    width: '100%',
    '@media (max-width: 767px)': {
      marginRight: 0,
    },
    '& .MuiOutlinedInput-root': {
      background: '#fff',
      '& input': {
        padding: 14,
        fontSize: 16,
        letterSpacing: 2,
        color: '#696969 !important',
        '&::placeholder': {
          textTransform: 'uppercase',
          color: '#69696980 !important',
          opacity: 1,
          fontWeight: '300',
          letterSpacing: 2,
        },
      },
    },
    '& .MuiFormHelperText-contained': {
      margin: 0,
    },
  },
}));

export default style;

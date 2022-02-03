import makeStyles from '@mui/styles/makeStyles';

const style = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    '@media (max-width: 767px)': {
      marginRight: 0,
      marginLeft: 0,
    },
    '& .MuiSelect-select.MuiSelect-select': {
      fontFamily: 'DINNextLTPro-Bold',
      paddingRight: '34px !important',
      color: '#696969 !important',
    },
    '& .MuiOutlinedInput-root': {
      background: 'white',
    },
    '& input': {
      padding: 14,
      boxSizing: 'border-box',
      fontSize: 15,
      fontFamily: 'DINNextLTPro-Bold',
      color: '#696969 !important',
      '&::placeholder': {
        textTransform: 'uppercase',
        color: '#69696980 !important',
        opacity: 1,
        letterSpacing: 2,
        fontFamily: 'DINNextLTPro-Bold',
        fontWeight: '300',
      },
    },
  },
  menuItem: {
    borderBottom: '1px solid #eee',
    padding: 10,
    maxWidth: 500,
    minWidth: '100%',
    whiteSpace: 'break-spaces',
  },
  dropdownUi: {
    marginLeft: 0,
    '& .MuiSelect-select.MuiSelect-select': {
      padding: 14,
    },
  },
  errorText: {
    color: '#f44336',
    fontSize: 11,
    bottom: -20,
    position: 'absolute',
    fontFamily: 'DIN Next LT Pro Regular !important',
  },
}));

export default style;

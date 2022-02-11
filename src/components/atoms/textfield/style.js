import { colors, fonts } from '../../../theme';

const style = (() => ({
  formControl: {
    marginTop: 10,
    width: '100%',
    '@media (max-width: 767px)': {
      marginRight: 0,
    },
    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
      fontFamily: `${fonts.fontType.roboto}!important`,
      fontSize: '16px !important',
      color: `${colors.black}!important`,
    },
    '& .MuiOutlinedInput-root': {
      background: '#fff',
      '& input': {
        padding: 14,
        fontFamily: `${fonts.fontType.roboto}!important`,
        fontSize: '16px !important',
        color: `${colors.black}!important`,
        letterSpacing: 2,
      },
    },
    '& .MuiFormHelperText-contained': {
      margin: 0,
    },
  },
}));

export default style;

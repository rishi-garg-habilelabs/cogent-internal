import { colors, fonts } from '../../../theme';

const buttonStyle = (theme) => ({
  icon: {
    marginTop: 5,
  },
  primaryButton: {
    '&.MuiButton-root': {
      borderRadius: 8,
      textTransform: 'none !important',
      color: '#f3f8fe !important',
      boxShadow: '0 4px 4px -2px hsl(0deg 0% 65% / 25%)',
      boxSizing: 'border-box',
      height: 45,
      marginLeft: '15px',
      minWidth: 200,
      fontFamily: fonts.fontType.roboto,
      padding: 8,
      background: colors.primary,
      '&:hover': {
        color: '#1976d2 !important',
        background: 'hsl(240deg 8% 93%)',
      },
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
  secButton: {
    '&.MuiButton-root': {
      fontFamily: fonts.fontType.roboto,
      borderRadius: 8,
      textTransform: 'none',
      background: 'white',
      boxShadow:
        '0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%) !important',
      boxSizing: 'border-box',
      height: 45,
      marginLeft: '15px',
      minWidth: 200,
      border: '2px solid #1976d2',
      color: '#1976d2 !important',
      padding: 5,
      '&:hover': {
        background: colors.primary,
        color: '#fff !important',
      },
    },
  },
  customizeButton: {
    '&.MuiButton-root': {
      textTransform: 'none',
      background: theme.palette.primary.main,
      border: `1px solid ${colors.primary} !important`,
      borderRadius: 0,
      boxShadow:
        '0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%) !important',
      boxSizing: 'border-box',
      height: '40px',
      marginLeft: '15px',
      minWidth: '108px',
      color: '#d300ff',
      '&:hover': {
        background: '#d300ff',
        color: '#fff',
      },
    },
  },
});

export default buttonStyle;

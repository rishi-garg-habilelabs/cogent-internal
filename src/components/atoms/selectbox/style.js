import { colors } from '../../../theme';

const selectBoxStyle = () => ({
  formControl: {
    padding: 9,
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #484850',
      borderRadius: '5px 5px 0 0',
      height: 52,
    },
    '&:focus': {
      borderRadius: 4,
      borderColor: 'tranparent',
      borderBottom: '1px solid',
      background: 'none',
    },
    width: '100%',
    '@media (max-width: 767px)': {
      marginRight: 0,
    },
    '& .MuiOutlinedInput-root': {
      background: '#fff',
      height: 52,
      padding: 5,
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
  selectEmpty: {
    marginTop: 6,
  },
  paper: {
    background: 'black',
    color: 'red',
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
  },
});

export default selectBoxStyle;

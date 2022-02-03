import makeStyles from '@mui/styles/makeStyles';

const style = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft: '0px',
    width: '100%',
    '@media (max-width: 767px)': {
      marginRight: 0,
    },
  },
  fileLabel: {
    width: '70%',
    marginRight: '2%',
    cursor: 'not-allowed',
  },
  container: {
    display: 'flex',
    '& label': {
      backgroundColor: '#9cc',
      color: '#fff',
      boxShadow: 'none',
      padding: '8px 24px',
      letterSpacing: 2,
      '& span': {
        fontFamily: 'DIN Next LT Pro Regular',
      },
      '&:hover': {
        backgroundColor: '#019491',
        boxShadow: 'none',
      },
    },
  },
}));

export default style;

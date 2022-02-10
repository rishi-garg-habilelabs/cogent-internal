import makeStyles from '@mui/styles/makeStyles';

import { colors, fonts } from '../../theme';

const style = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100% !important',
    marginTop: 20,
  },
  divWrapper: {
    background: 'white',
    width: '100% !important',
  },
  headerTitle: {
    fontWeight: fonts.fontWeight.bold,
    fontSize: 20,
    color: colors.primary,
    marginLeft: '3%',
    width: '15% !important',
    borderBottom: `4px solid${colors.primary}`,
  },
  title: {
    textAlign: 'center',
    fontWeight: 800,
    color: 'black',
    fontSize: 22,
    paddingBlock: 20,
  },
  button: {
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  header: {
    background: colors.primary,
    padding: '30px 12px 12px',
    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
      color: 'white',
    },
    marginTop: 0,
    '& .MuiStepLabel-iconContainer.MuiStepLabel-alternativeLabel': {
      cursor: 'pointer',
    },
  },
}));

export default style;

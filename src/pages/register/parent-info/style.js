import makeStyles from '@mui/styles/makeStyles';

const parentinfostyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '65%',
    marginTop: 20,
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
}));

export default parentinfostyle;

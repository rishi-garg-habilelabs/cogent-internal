import makeStyles from '@mui/styles/makeStyles';

const style = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  border: {
    borderBottom: '2px solid lightgray',
    width: '100%',
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 400,
    fontSize: 16,
    color: '#929eaa',
  },
}));

export default style;

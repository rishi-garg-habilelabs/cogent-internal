export const styles = makeStyles(() => ({
  inputError: {
    color: 'red',
  },
  root: {
    marginTop: 20,
    width: '100% important',
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

export const headingStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  p: 1,
  m: 4,
  fontWeight: 600,
  bgcolor: 'lightblue',
  borderRadius: 1,
};

export const rowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  p: 1,
  m: 1,
  bgcolor: 'background.paper',
  borderRadius: 1,
};

export const loaderStyle = {
  width: '100%',
  display: 'flex',
  height: '100vh',
  top: '0',
  left: '0',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'fixed',
  background: 'rgba(0,0,0,0.3)',
  zIndex: '9',
};

export default {
  styles,
  headingStyle,
  rowStyle,
  loaderStyle,
};

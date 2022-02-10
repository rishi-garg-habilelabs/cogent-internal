import { colors, fonts } from '../../../theme';

const parentinfostyle = () => ({
  heading: {
    '& .MuiTypography-root': {
      color: colors.black,
      fontWeight: fonts.fontWeight.bold,
      background: 'skyblue',
      padding: 5,
      fontSize: 20,
      marginLeft: '1%',
      marginTop: 5,
      borderRadius: 5,
    },
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

});

export default parentinfostyle;

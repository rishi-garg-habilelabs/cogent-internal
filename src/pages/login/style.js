import BackgroundImg from '../../assets/images/leaf.png';
import { colors, fonts } from '../../theme';

const loginStyle = () => ({
  mainContainer: {
    width: 900,
    justifyContent: 'center',
  },
  textMargin: {
    marginTop: 20,
    '& .MuiSvgIcon-root': {
      fill: colors.black,
    },
  },
  wrapper: {
    justifyContent: 'center',
    marginTop: '10%',
    width: '100%',
  },
  cardLeft: {
    backgroundImage: `url(${BackgroundImg})`,
    borderRadius: 0,
    boxShadow: 'none',
    minHeight: 450,
    textAlign: 'center',
  },
  cardRight: {
    background: '#e4f5fd',
    borderRadius: 0,
    marginLeft: 10,
    color: 'white',
    textAlign: 'center',
    boxShadow: 'none',
    minHeight: 450,
  },
  contactUsDes: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'left',
    paddingLeft: 5,
    color: colors.black,
  },
  contactUs: {
    fontSize: 14,
    fontWeight: fonts.fontWeight.low,
    textAlign: 'left',
    paddingLeft: 5,
    color: colors.black,
    textDecoration: 'underline',
  },
});

export default loginStyle;

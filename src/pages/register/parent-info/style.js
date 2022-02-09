import makeStyles from "@mui/styles/makeStyles";

import {colors} from '../../../theme'
const parentinfostyle = makeStyles(() => ({
  inputError:{
    color:'red'
  },
  root: {
    marginTop: 20,
    width:'100% important'
  },
  title: {
    textAlign: "center",
    fontWeight: 800,
    color: "black",
    fontSize: 22,
    paddingBlock: 20,
  },
  button: {
    justifyContent: "flex-end",
    marginTop: 20,
  },
}));

export default parentinfostyle;

import BackgroundImg from "../../assets/images/leaf.png";
const loginStyle = (theme) => ({
  mainContainer: {
    width: 900,
    justifyContent: "center",
  },
  textMargin:{
    marginTop: 20 
  },
  wrapper: {
    justifyContent: "center",
    marginTop: "10%",
    width:'100%'
  },
  cardLeft: {
    backgroundImage: `url(${BackgroundImg})`,
    borderRadius: 0,
    boxShadow: "none",
    minHeight: 450,
    textAlign: "center",
  },
  cardRight: {
    background: "#e4f5fd",
    borderRadius: 0,
    marginLeft:10,
    color: "white",
    textAlign: "center",
    boxShadow: 'none',
    minHeight: 450,
  },
});

export default loginStyle;
